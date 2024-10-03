import os from 'os';
import disk from 'diskusage';

class SystemProfiler {
    getCpuUsage() {
        const cpus = os.cpus();
        const cpuCount = cpus.length;

        let idleMs = 0;
        let totalMs = 0;

        for (let i = 0; i < cpuCount; i++) {
            for (const type in cpus[i].times) {
                totalMs += cpus[i].times[type];
            }
            idleMs += cpus[i].times.idle;
        }

        const idlePercentage = (idleMs / totalMs) * 100;
        const totalPercentage = 100 - idlePercentage;

        return {
            cpuCount,
            idlePercentage: idlePercentage.toFixed(2),
            totalPercentage: totalPercentage.toFixed(2)
        };
    }

    getMemoryUsage() {
        const total = os.totalmem();
        const free = os.freemem();
        const used = total - free;
        const usagePercentage = (used / total) * 100;

        return {
            total,
            used,
            free,
            usagePercentage: usagePercentage.toFixed(2)
        };
    }

    async getDiskUsage() {
        const { total, free } = await disk.check('/');
        const used = total - free;
        const usagePercentage = (used / total) * 100;

        return {
            total,
            used,
            free,
            usagePercentage: usagePercentage.toFixed(2)
        };
    }

    async getSystemSnapshot() {
        return {
            cpu: this.getCpuUsage(),
            memory: this.getMemoryUsage(),
            disk: await this.getDiskUsage()
        };
    }
}

export default SystemProfiler;
