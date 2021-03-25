import moment from 'moment';

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
};

const sleep = async (time) => await new Promise(r => setTimeout(r, time));

const countChar = (text, char) => {
    let num = 0;

    for (let i = 0; i < text.length; i++)
        num += text[i] === char ? 1 : 0;

    return num;
};

const calculateCurrentAge = () => moment().diff("1999-10-13", "years");

const Util = {
    shuffle,
    sleep,
    countChar,
    calculateCurrentAge,
};

export default Util;
