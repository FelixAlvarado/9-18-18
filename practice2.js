var PredictTheWinner = function(nums, p1 = 0, p2 = 0, turn = false) {
    if (turn){
        turn = false;
    }else {
        turn = true;
    }
    let first = parseInt(nums[0]);
    let second = parseInt(nums[1]);
    let pen = parseInt(nums[nums.length - 2]);
    let last = parseInt(nums.slice(-1));
    
    if (nums.length < 3) return true;
    
    if (nums.length === 3){
        let firstPick = 0;
        let secondPick = 0;
        if (first >= last){
        firstPick += first;
        secondPick += Math.max(second, last);
        firstPick += Math.min(second, last);
        }else{
        firstPick += last;
        secondPick += Math.max(first, second);
        firstPick += Math.min(first,second);
        }
        if(turn) {
            p1 += firstPick;
            p2 += secondPick;
            return p1 >= p2;
        }else {
            p1 += secondPick;
            p2 += firstPick;
            return p1 >= p2;
        }
    }
    
    if(second + last > pen + first ){
        if (turn){
            p1 += last;
        }else {
            p2 += last;
        }
        return PredictTheWinner(nums.slice(0,nums.length - 1), p1, p2, turn);
    }else if (second + last < pen + first ){
                if (turn){
            p1 += first;
        }else {
            p2 += first;
        }
        return PredictTheWinner(nums.slice(1,nums.length), p1, p2, turn);
    }else if(first > last){
         if (turn){
            p1 += first;
        }else {
            p2 += first;
        }
        return PredictTheWinner(nums.slice(1,nums.length), p1, p2, turn);
    }else{
        if (turn){
            p1 += last;
        }else {
            p2 += last;
        }
        return PredictTheWinner(nums.slice(0,nums.length - 1), p1, p2, turn);
    }
};