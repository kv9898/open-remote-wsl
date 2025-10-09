# Open Remote - WSL for Positron

This is a fork of [Open Remote - WSL](https://github.com/jeanp413/open-remote-wsl) adapted for [Positron](https://github.com/posit-dev/positron) only.

![Open Remote WSL](https://github.com/user-attachments/assets/30dbc136-3ca2-451f-9a3d-58d7c68b5fe6)

**Supported**:

- Windows 11 with WSL 2
- Windows 10, May 2021 Update, version 21H1
- Positron since commit `8df4b88`

## Requirements

- `wget` or `curl` needs to be installed in the WSL distro
- (Optional) Git for Windows installed on the Windows host for Git credential forwarding

## Git Credential Forwarding

When you connect to WSL using this extension, it automatically configures Git in WSL to use Windows Git Credential Manager if available. This allows you to:

- Clone private repositories without re-entering credentials
- Push and pull to/from Git repositories using your Windows credentials
- Use the same Git credentials across Windows and WSL

The extension will automatically detect and configure Git Credential Manager from standard Git for Windows installation paths. If Git Credential Manager is not found, you'll see a message in the logs, but the extension will continue to work (though you may need to enter Git credentials manually).

**Troubleshooting Git Credentials:**

If Git operations still fail after connecting to WSL:

1. Verify that Git for Windows is installed on your Windows host
2. Check that Git Credential Manager is enabled in Git for Windows
3. If Git is installed in a non-standard location, you can manually configure Git in WSL:
   ```bash
   git config --global credential.helper "/path/to/git-credential-manager.exe"
   ```
4. Alternatively, you can set up SSH keys for Git authentication

If you prefer to configure Git credentials manually or use a different method, you can set your own Git credential helper after connecting to WSL.

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
