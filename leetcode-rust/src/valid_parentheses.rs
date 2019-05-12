struct Solution;

impl Solution {
    pub fn is_valid(s: String) -> bool {
        use std::collections::BTreeMap;

        let hash: BTreeMap<char, char> = [('{', '}'), ('[', ']'), ('(', ')')]
            .iter()
            .cloned()
            .collect();

        let mut vec: Vec<char> = vec![];

        for c in s.chars() {
            match hash.get(&c) {
                Some(&entry) => vec.push(entry),
                None => {
                    let popped = vec.pop().unwrap_or('.');

                    if popped != c {
                        return false;
                    }
                }
            }
        }

        return vec.len() == 0;
    }
}

#[test]
fn test1() {
    let string: String = "((()))".to_owned();
    assert_eq!(Solution::is_valid(string), true);
}

#[test]
fn test2() {
    let string: String = "(())))".to_owned();
    assert_eq!(Solution::is_valid(string), false);
}
