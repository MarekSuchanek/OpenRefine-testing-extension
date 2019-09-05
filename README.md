# OpenRefine-testing-extension

[![Build Status](https://travis-ci.com/MarekSuchanek/OpenRefine-testing-extension.svg?branch=master)](https://travis-ci.com/MarekSuchanek/OpenRefine-testing-extension)
![GitHub All Releases](https://img.shields.io/github/downloads/MarekSuchanek/OpenRefine-testing-extension/total)
[![License](https://img.shields.io/github/license/MarekSuchanek/OpenRefine-testing-extension)](LICENSE)

Just testing setup for [OpenRefine](http://openrefine.org) extension

## Installation

Distribution ZIP files are located at [releases](https://github.com/MarekSuchanek/OpenRefine-testing-extension/releases) page. 

Just download it and unzip into the `extensions` folder in your OpenRefine instance, for more information visit [OpenRefine - Installing Extensions](https://github.com/OpenRefine/OpenRefine/wiki/Installing-Extensions).

## Development

You are required to have Maven installed with other necessary tools for building Java:

```console
$ mvn clean compile
$ mvn package assembly:single
```

After issuing these commands, prepared ZIP file should be located in `target` directory according to Maven output.

## License

This project is licensed under MIT license - see the [LICENSE](LICENSE) file for more information.
