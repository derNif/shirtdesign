import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#CF5260',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './logo2_niv.png',
    fullDecal: './logo2_niv.png'
});
//#c7b285
export default state;