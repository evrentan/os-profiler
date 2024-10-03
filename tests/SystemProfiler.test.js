import SystemProfiler from '../src/services/SystemProfiler.js';
import os from 'os';
import disk from 'diskusage';

jest.mock('diskusage');

describe('SystemProfiler', () => {
    let profiler;

    beforeEach(() => {
        profiler = new SystemProfiler();
    });

    test('should get CPU usage', () => {
        const cpuUsage = profiler.getCpuUsage();
        expect(cpuUsage).toHaveProperty('cpuCount');
        expect(cpuUsage).toHaveProperty('idlePercentage');
        expect(cpuUsage).toHaveProperty('totalPercentage');
        expect(typeof cpuUsage.idlePercentage).toBe('string');
        expect(typeof cpuUsage.totalPercentage).toBe('string');

        // Edge case: CPU count should be greater than 0
        expect(cpuUsage.cpuCount).toBeGreaterThan(0);
    });

    test('should get memory usage', () => {
        const memoryUsage = profiler.getMemoryUsage();
        expect(memoryUsage).toHaveProperty('total');
        expect(memoryUsage).toHaveProperty('used');
        expect(memoryUsage).toHaveProperty('free');
        expect(memoryUsage).toHaveProperty('usagePercentage');
        expect(typeof memoryUsage.usagePercentage).toBe('string');

        // Edge case: Total memory should be greater than used and free memory
        expect(memoryUsage.total).toBeGreaterThan(memoryUsage.used);
        expect(memoryUsage.total).toBeGreaterThan(memoryUsage.free);
    });

    test('should get disk usage', async () => {
        // Mock the disk usage data
        disk.check.mockResolvedValue({
            total: 1000000000, // 1 GB
            free: 500000000    // 500 MB
        });

        const diskUsage = await profiler.getDiskUsage();
        expect(diskUsage).toHaveProperty('total');
        expect(diskUsage).toHaveProperty('used');
        expect(diskUsage).toHaveProperty('free');
        expect(diskUsage).toHaveProperty('usagePercentage');
        expect(typeof diskUsage.usagePercentage).toBe('string');

        // Edge case: Total disk space should be greater than used and free space
        expect(diskUsage.total).toBeGreaterThan(diskUsage.used);
        expect(diskUsage.total).toBeGreaterThan(diskUsage.free);
    });

    test('should get system snapshot', async () => {
        disk.check.mockResolvedValue({
            total: 1000000000, // 1 GB
            free: 500000000    // 500 MB
        });

        const snapshot = await profiler.getSystemSnapshot();
        expect(snapshot).toHaveProperty('cpu');
        expect(snapshot).toHaveProperty('memory');
        expect(snapshot).toHaveProperty('disk');

        expect(snapshot.cpu).toHaveProperty('cpuCount');
        expect(snapshot.memory).toHaveProperty('total');
        expect(snapshot.disk).toHaveProperty('total');
    });

    test('should handle errors when accessing disk usage', async () => {
        disk.check.mockRejectedValue(new Error('Disk access error'));

        await expect(profiler.getDiskUsage()).rejects.toThrow('Disk access error');
    });

    test('should handle errors when accessing memory usage', () => {
        jest.spyOn(os, 'totalmem').mockImplementation(() => {
            throw new Error('Memory access error');
        });

        expect(() => profiler.getMemoryUsage()).toThrow('Memory access error');
        os.totalmem.mockRestore();
    });

    test('should handle errors when accessing CPU usage', () => {
        jest.spyOn(os, 'cpus').mockImplementation(() => {
            throw new Error('CPU access error');
        });

        expect(() => profiler.getCpuUsage()).toThrow('CPU access error');
        os.cpus.mockRestore();
    });
});
