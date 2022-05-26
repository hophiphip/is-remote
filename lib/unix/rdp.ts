/**
 * Test if application in Unix-like OS started in RDP/VNC session.
 * During remote session display environment variable must be different from the default one.
 * @returns boolean
 */
const isUnixRDPEnv = (): boolean => {
    const defaultLinuxDisplay = ':0';
    return process.env.DISPLAY !== defaultLinuxDisplay;
};

export default isUnixRDPEnv;