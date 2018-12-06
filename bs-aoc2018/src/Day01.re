let rec getFinalFrequency = (frequencies) => {
    /* ListLabels.fold_left(~f=(r, elem) => r + elem, ~init=0)(frequencies);*/
    switch frequencies {
    | [] => 0
    | [head, ...tails] => head + getFinalFrequency(tails)
    };
};

Js.log(getFinalFrequency(Day01Input.input));

