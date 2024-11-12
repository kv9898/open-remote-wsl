# Open Remote - WSL for Positron

This is a fork of [Open Remote - WSL](https://github.com/jeanp413/open-remote-wsl) adapted for [Positron](https://github.com/posit-dev/positron) only.

![Open Remote WSL](https://raw.githubusercontent.com/jeanp413/open-remote-wsl/master/docs/images/open-remote-wsl.gif)


**Supported**:

- Windows 11 with WSL 2
- Windows 10, May 2021 Update, version 21H1

## Requirements

- `wget` or `curl` needs to be installed in the WSL distro

**Activation**

> NOTE: Not needed in VSCodium since version 1.82

Enable the extension in your `argv.json`


```json
{
    ...
    "enable-proposed-api": [
        ...,
        "jeanp413.open-remote-wsl",
    ]
    ...
}
```
which you can open by running the `Preferences: Configure Runtime Arguments` command.
The file is located in `~/.vscode-oss/argv.json`.
