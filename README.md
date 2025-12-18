# Open Remote - WSL for Positron

> **⚠️ DEPRECATED**: This extension is no longer maintained. Since [Positron 2025.11.0-234](https://github.com/posit-dev/positron/releases/tag/2025.11.0-234), Positron officially supports WSL with a built-in extension. Users are recommended to update Positron and use the official extension instead.

This is a fork of [Open Remote - WSL](https://github.com/jeanp413/open-remote-wsl) adapted for [Positron](https://github.com/posit-dev/positron) only.

![Open Remote WSL](https://github.com/user-attachments/assets/30dbc136-3ca2-451f-9a3d-58d7c68b5fe6)

**Supported**:

- Windows 11 with WSL 2
- Windows 10, May 2021 Update, version 21H1
- Positron since commit `8df4b88`

## Requirements

- `wget` or `curl` needs to be installed in the WSL distro

## Notes on Launching Positron from the WSL Command Line

It is sometimes convenient to launch Positron directly from a WSL directory using the command `positron .`.  To enable this feature, choose **Yes** when you see the following prompt:

<img src="https://github.com/user-attachments/assets/a3b484f7-2eaa-464e-8eff-4969227c7a4d" alt="Positron WSL Prompt Image" width="400"/>

This sets the environment variable `POSITRON_WSL_EXTENSION_NAME` to `kv9898.open-remote-wsl`, which is read by the Positron launcher script when starting from WSL.

If you missed the prompt, you can manually enable this feature:

- Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS)
- Run the command:  
  **Register this WSL extension for launching Positron from WSL**

To disable this feature:

- Run the command:  
  **Unregister this WSL extension from Positron launcher**

Alternatively, you can manually remove the environment variable `POSITRON_WSL_EXTENSION_NAME` from your system settings.
