struct Solution;

impl Solution {
    fn dfs(current_grid: &mut Vec<Vec<char>>, row: usize, column: usize) {
        if row > current_grid.len() - 1
            || column > current_grid[row].len() - 1
            || current_grid[row][column] == '0'
        {
            return;
        }

        current_grid[row][column] = '0';

        if (row as i32) - 1 >= 0 {
            Solution::dfs(current_grid, row - 1, column);
        }

        if (column as i32) - 1 >= 0 {
            Solution::dfs(current_grid, row, column - 1);
        }

        Solution::dfs(current_grid, row + 1, column);
        Solution::dfs(current_grid, row, column + 1);
    }

    pub fn num_islands(grid: Vec<Vec<char>>) -> i32 {
        let mut islands: i32 = 0;
        let mut parent = grid.to_vec();
        let (rows, columns) = (parent.len(), parent[0].len());
        for row in 0..rows {
            for column in 0..columns {
                if parent[row][column] == '1' {
                    islands = islands + 1;
                    Solution::dfs(&mut parent, row, column);
                }
            }
        }

        println!("done ! {:?}", parent);
        return islands;
    }
}

#[test]
fn test_number_of_islands() {
    let data = vec![
        vec!['1', '1', '0', '1', '0'],
        vec!['1', '1', '0', '1', '0'],
        vec!['1', '1', '0', '0', '0'],
        vec!['0', '0', '0', '1', '1'],
    ];
    assert_eq!(Solution::num_islands(data), 3);
}
