import isWindowsRDPEnv from "./win32/rdp";
import isUnixRDPEnv from "./unix/rdp";

/**
 * Test if app was started from remote session.
 * @returns boolean indicating whether app was started from remote session.
 */
export const isRdp = (): boolean => {
    switch (process.platform) {
        case 'win32': {
            return isWindowsRDPEnv();
        }
    
        default: {
            return isUnixRDPEnv();
        }
    }
};
  