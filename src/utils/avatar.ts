import { createAvatar } from '@dicebear/core';
import { botttsNeutral ,icons , rings} from '@dicebear/collection';

export const generateAvatar = (seed: string | number,style?:"icons") => {
const styles = {
    "icons":rings,
    botttsNeutral
}
    const avatar = createAvatar( (style && styles[style])|| botttsNeutral, {
        seed:`${seed}`
    });

    const svg = avatar.toDataUri();
    return svg
}