
# os-profiler

**os-profiler** is a lightweight Node.js utility that provides a snapshot of system resource utilization, including CPU, memory, and disk usage. This package is ideal for profiling system utilization in real-time, enabling you to track resource consumption and ensure that systems are running efficiently.

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
const { getSystemSnapshot } = require('os-profiler');

(async () => {
  const snapshot = await getSystemSnapshot();
  console.log(snapshot);
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

## Method

### `getSystemSnapshot()`

Returns a promise that resolves to an object containing CPU, memory, and disk utilization data.

- **CPU Data:**
  - `cpuCount`: Number of CPU cores.
  - `idlePercentage`: Percentage of time CPU cores are idle.
  - `totalPercentage`: Percentage of CPU usage.

- **Memory Data:**
  - `total`: Total system memory in bytes.
  - `used`: Used memory in bytes.
  - `free`: Free memory in bytes.
  - `usagePercentage`: Memory usage as a percentage.

- **Disk Data:**
  - `total`: Total disk space in bytes.
  - `used`: Used disk space in bytes.
  - `free`: Free disk space in bytes.
  - `usagePercentage`: Disk usage as a percentage.

## Setup on Your Local Machine

To set up the project on your local machine, follow these steps:

Clone the repository:

```bash
git clone git@github.com:evrentan/year-in-percent.git
```

Navigate to the project directory:

```bash
cd year-in-percent
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

This library was created to help developers easily calculate the progress of the current year. If you have any questions or suggestions, feel free to reach out!

## Sponsoring

If you enjoy this project and would like to support its development, please consider sponsoring. Your support helps me continue improving and maintaining the project.

You can sponsor me via:

[![GitHub Sponsors](https://img.shields.io/badge/Sponsor%20on-GitHub-blue?style=for-the-badge&logo=github)][github-sponsors-url]

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-yellow?style=for-the-badge&logo=buy-me-a-coffee)][buy-me-a-coffee-url]

Thank you for your support!


[github-sponsors-url]: https://github.com/sponsors/evrentan
[buy-me-a-coffee-url]: https://www.buymeacoffee.com/evrentan
