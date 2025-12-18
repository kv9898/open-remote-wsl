import * as vscode from 'vscode';
import Log from './common/logger';
import { RemoteWSLResolver, REMOTE_WSL_AUTHORITY } from './authResolver';
import { promptOpenRemoteWSLWindow, setEnvVariable, unsetEnvVariable, promptSetEnvVariable } from './commands';
import { DistroTreeDataProvider } from './distroTreeView';
import { getRemoteWorkspaceLocationData, RemoteLocationHistory } from './remoteLocationHistory';
import { WSLManager } from './wsl/wslManager';
import { isWindows } from './common/platform';

export async function activate(context: vscode.ExtensionContext) {
    if (!isWindows) {
        return;
    }

    const logger = new Log('Remote - WSL');
    context.subscriptions.push(logger);

    const wslManager = new WSLManager(logger);
    const remoteWSLResolver = new RemoteWSLResolver(wslManager, logger);
    context.subscriptions.push(vscode.workspace.registerRemoteAuthorityResolver(REMOTE_WSL_AUTHORITY, remoteWSLResolver));
    context.subscriptions.push(remoteWSLResolver);

    const locationHistory = new RemoteLocationHistory(context);
    const locationData = getRemoteWorkspaceLocationData();
    if (locationData) {
        await locationHistory.addLocation(locationData[0], locationData[1]);
    }

    const distroTreeDataProvider = new DistroTreeDataProvider(locationHistory, wslManager);
    context.subscriptions.push(vscode.window.createTreeView('wslTargets', { treeDataProvider: distroTreeDataProvider }));
    context.subscriptions.push(distroTreeDataProvider);

    context.subscriptions.push(vscode.commands.registerCommand('openremotewsl.connect', () => promptOpenRemoteWSLWindow(wslManager, true, true)));
    context.subscriptions.push(vscode.commands.registerCommand('openremotewsl.connectInNewWindow', () => promptOpenRemoteWSLWindow(wslManager, true, false)));
    context.subscriptions.push(vscode.commands.registerCommand('openremotewsl.connectUsingDistro', () => promptOpenRemoteWSLWindow(wslManager, false, true)));
    context.subscriptions.push(vscode.commands.registerCommand('openremotewsl.connectUsingDistroInNewWindow', () => promptOpenRemoteWSLWindow(wslManager, false, false)));
    context.subscriptions.push(vscode.commands.registerCommand('openremotewsl.showLog', () => logger.show()));

    // Register environment variable commands
    context.subscriptions.push(
        vscode.commands.registerCommand('openremotewsl.setPositronEnv', () => {
            setEnvVariable(true);
        }),
        vscode.commands.registerCommand('openremotewsl.unsetPositronEnv', () => {
            unsetEnvVariable(true);
        })
    );

    // Manage add to environment prompt
    promptSetEnvVariable(context);
    context.subscriptions.push(
        vscode.commands.registerCommand('openremotewsl.resetPromptState', () => {
            context.globalState.update('positronWslPrompted', false);
            vscode.window.showInformationMessage('Prompt state has been reset. You will be prompted again next activation.');
        })
    );
}

export function deactivate() {
}
