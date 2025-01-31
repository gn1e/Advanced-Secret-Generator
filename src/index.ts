import { gensecret } from './secret/generate';
import type { Encoding } from './utils/types';

const ENCODING = (Bun.env.ENCODING as Encoding) || 'base64';

(async () => {
    console.log(`
        
        ░██████╗███████╗░█████╗░██████╗░███████╗████████╗
        ██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝╚══██╔══╝
        ╚█████╗░█████╗░░██║░░╚═╝██████╔╝█████╗░░░░░██║░░░
        ░╚═══██╗██╔══╝░░██║░░██╗██╔══██╗██╔══╝░░░░░██║░░░
        ██████╔╝███████╗╚█████╔╝██║░░██║███████╗░░░██║░░░
        ╚═════╝░╚══════╝░╚════╝░╚═╝░░╚═╝╚══════╝░░░╚═╝░░░
                `)
    const secret = await gensecret(undefined, ENCODING);
    console.log(`${ENCODING.charAt(0).toUpperCase() + ENCODING.slice(1)}:`, secret);
})();
