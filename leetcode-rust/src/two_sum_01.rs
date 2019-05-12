struct Solution;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        use std::collections::HashMap;
        let mut hash: HashMap<i32, i32> = HashMap::new();

        for i in 0..nums.len() {
            let expected = target - nums[i];
            match hash.get(&expected) {
                Some(index) => return vec![i as i32, *index],
                None => {
                    hash.insert(nums[i], i as i32);
                }
            }
        }
        vec![]
    }
}

#[test]
fn test_add_two_numbers() {
    let nums = vec![2, 7, 11, 15];
    assert_eq!(Solution::two_sum(nums, 9), vec![1, 0]);
}
