import { createAvatar } from '@dicebear/core';
import { botttsNeutral ,icons} from '@dicebear/collection';

export const generateAvatar = (seed: string | number,style?:"icons") => {
const styles = {
    "icons":icons,
    botttsNeutral
}
    const avatar = createAvatar( (style && styles[style])|| botttsNeutral, {
        seed:`${seed}`
    });

    const svg = avatar.toDataUri();
    return svg
}