// In this HackerRank Append and Delete problem you have Given an integer, k, and two strings, s, and t,
//   to determine whether or not you can convert s to t by performing exactly k of the above operations on s. If it's possible, print Yes. Otherwise, print No.


function appendAndDelete(s, t, k) {
    // Write your code here
    let o = s.length + t.length
    if (k > o) return 'Yes'
    for (let i = 0, l = Math.min(s.length, t.length); i < l; i++, o -= 2) {
        if (s[i] !== t[i]) break
    }
    return o > k || (k - o) % 2 !== 0 ? 'No' : 'Yes'

}
