struct Solution;

impl Solution {
    fn get_distance(point: &Vec<i32>) -> i32 {
        let origin = vec![0, 0];
        let x = (origin[0] - point[0]).pow(2);
        let y = (origin[1] - point[1]).pow(2);

        return x + y;
    }

    pub fn k_closest(points: Vec<Vec<i32>>, k: i32) -> Vec<Vec<i32>> {
        let mut points = points.clone();
        points.sort_by(|a, b| Solution::get_distance(&a).cmp(&Solution::get_distance(b)));
        return points[0..k as usize].to_vec();
    }
}

#[cfg(test)]
mod tests {
    use crate::k_closest_points_to_origin_973::Solution;
    #[test]
    fn test_k_closest_points_to_origin() {
        let data = vec![vec![1, 3], vec![-2, 2]];
        assert_eq!(Solution::k_closest(data, 1), vec![vec![-2, 2]]);
    }

}
