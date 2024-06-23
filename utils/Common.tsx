const transformStringToArray = (input: string): [number[], number[]] => {
    const part1: number[] =
        input
            .slice(0, 12)
            .match(/.{1,4}/g)
            ?.map(Number) || [];
    const part2: number[] = [Number(input.slice(12))];
    return [part1, part2];
};

export default {
    transformStringToArray
};
