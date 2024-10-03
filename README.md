# os-profiler

**os-profiler** is a lightweight utility that provides a snapshot of system resource utilization, including CPU, memory, and disk usage. This package is ideal for profiling system utilization in real-time, enabling you to track resource consumption and ensure that systems are running efficiently.

## Features
- Get CPU usage, including idle and active time.
- Monitor memory usage, including total, used, free memory, and usage percentage.
- Analyze disk utilization, including total, used, and free space on the root directory.

## Installation

You can install this package via npm:

```bash
npm install os-profiler
```

## Usage

Here’s an example of how to use `os-profiler` to retrieve a snapshot of system resource utilization:

```javascript
import { SystemProfiler } from 'os-profiler';

const profiler = new SystemProfiler();

(async () => {
  const snapshot = await profiler.getSystemSnapshot();
  console.log(snapshot);
  const cpu = await profiler.getCpuUsage();
  console.log(cpu);
  const memory = await profiler.getMemoryUsage();
  console.log(memory);
  const disk = await profiler.getDiskUsage();
  console.log(disk);
})();
```

### Output Example:

```json
{
  "cpu": {
    "cpuCount": 4,
    "idlePercentage": 85.65,
    "totalPercentage": 14.35
  },
  "memory": {
    "total": 17179869184,
    "used": 8376545280,
    "free": 8794213888,
    "usagePercentage": 48.76
  },
  "disk": {
    "total": 499963174912,
    "used": 256789012480,
    "free": 243174162432,
    "usagePercentage": 51.37
  }
}
```

## Methods

### `getSystemSnapshot()`

Returns a promise that resolves to an object containing CPU, memory, and disk utilization data.

- **CPU Data:**
  - `cpuCount`: Number of CPU cores.
  - `idlePercentage`: Percentage of time CPU cores are idle (string).
  - `totalPercentage`: Percentage of CPU usage (string).

- **Memory Data:**
  - `total`: Total system memory in bytes.
  - `used`: Used memory in bytes.
  - `free`: Free memory in bytes.
  - `usagePercentage`: Memory usage as a percentage (string).

- **Disk Data:**
  - `total`: Total disk space in bytes.
  - `used`: Used disk space in bytes.
  - `free`: Free disk space in bytes.
  - `usagePercentage`: Disk usage as a percentage (string).

#### Output Example:

```json
{
  "cpu": {
    "cpuCount": 4,
    "idlePercentage": "85.65",
    "totalPercentage": "14.35"
  },
  "memory": {
    "total": 17179869184,
    "used": 8376545280,
    "free": 8794213888,
    "usagePercentage": "48.76"
  },
  "disk": {
    "total": 499963174912,
    "used": 256789012480,
    "free": 243174162432,
    "usagePercentage": "51.37"
  }
}
```

### `getCpuUsage()`

Returns an object containing the CPU count, idle percentage, and total usage percentage.

- **Returns:**
  - `cpuCount`: Number of CPU cores.
  - `idlePercentage`: Percentage of time CPU cores are idle (string).
  - `totalPercentage`: Percentage of CPU usage (string).

#### Output Example:

```json
{
  "cpuCount": 4,
  "idlePercentage": "85.65",
  "totalPercentage": "14.35"
}
```

### `getMemoryUsage()`

Returns an object containing total, used, free memory, and usage percentage.

- **Returns:**
  - `total`: Total system memory in bytes.
  - `used`: Used memory in bytes.
  - `free`: Free memory in bytes.
  - `usagePercentage`: Memory usage as a percentage (string).

#### Output Example:
    
```json
{
    "total": 17179869184,
    "used": 8376545280,
    "free": 8794213888,
    "usagePercentage": "48.76"
}
```

### `getDiskUsage()`

Returns an object containing total, used, free disk space, and usage percentage.

- **Returns:**
  - `total`: Total disk space in bytes.
  - `used`: Used disk space in bytes.
  - `free`: Free disk space in bytes.
  - `usagePercentage`: Disk usage as a percentage (string).

#### Output Example:

```json
{
    "total": 499963174912,
    "used": 256789012480,
    "free": 243174162432,
    "usagePercentage": "51.37"
}
```

## Setup on Your Local Machine

To set up the project on your local machine, follow these steps:

Clone the repository:

```bash
git clone git@github.com:evrentan/os-profiler.git
```

Navigate to the project directory:

```bash
cd os-profiler
```

Install the dependencies:

```bash
npm install
```

Build the project:

```bash
npm run build
```

Test the project:

```bash
npm test
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/yourFeature`).
3. Commit your changes (`git commit -m 'feat(Feature): Add some Feature'`).
4. Push to the branch (`git push origin feature/yourFeature`).
5. Open a pull request.

## License

This project is licensed under the [ISC License](LICENSE).

## About

This library was created to help developers easily monitor system resource (CPU, memory, disk) utilization for profiling and optimization. If you have any questions or suggestions, feel free to reach out!

## Sponsoring

If you enjoy this project and would like to support its development, please consider sponsoring. Your support helps me continue improving and maintaining the project.

You can sponsor me via:

[![GitHub Sponsors](https://img.shields.io/badge/Sponsor%20on-GitHub-blue?style=for-the-badge&logo=github)][github-sponsors-url]

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-yellow?style=for-the-badge&logo=buy-me-a-coffee)][buy-me-a-coffee-url]

Thank you for your support!


[github-sponsors-url]: https://github.com/sponsors/evrentan
[buy-me-a-coffee-url]: https://www.buymeacoffee.com/evrentan
