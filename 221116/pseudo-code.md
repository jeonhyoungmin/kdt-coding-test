무작위 배열을 정렬하는 함수 제작하기.
정렬용 메서드는 사용할 수 없다.
순서를 바꾸는 실행마다 step값이 1씩 증가.
리턴은 객체 타입

문제
- sort(),sorted() 메서드 사용 금지
- 다른 배열에도 적용 가능
- 인자 = 배열
- 리턴 = 객체
- index 0 = "one" ...
- step 값 콘솔

의사코드 작성
배열은 무작위이다.
무작위의 배열을 순서대로 만들기 위해서는 비교가 필요
첫 번째 값이 두 번째 값보다 클 경우 배열의 마지막으로 이동
배열의 n번 째 단위가 n+1번 째 숫자보다 작아질 때까지 검사
n번 째 단위가 가장 작아졌을 경우
그 다음 n+1번 째 단위가 n+2번 째 숫자보다 작아질 때까지 검사

[6,2,9,8,4,0,8,5,7,1]

가장 작은 단위가 첫 번째로 오기 위해서는
모든 값보다 작아야 한다
두 번째로 작은 단위가 두 번째로 오기 위해서는
모든 값 중에서 첫 번째 값보다 작아야 한다.

n번째 단위가 n+1보다 크다면 n+2로 이동
n번째 단위가 n+1보다 작다면 n번째 위치




















6 2 9 8 4 0 8 5 7 1
2 6 9 8 4 0 8 5 7 1
2 6 8 9 4 0 8 5 7 1
2 6 8 4 9 0 8 5 7 1
2 6 4 8 9 0 8 5 7 1
2 4 6 8 9 0 8 5 7 1
2 4 6 8 0 9 8 5 7 1
2 4 6 0 8 9 8 5 7 1
2 4 0 6 8 9 8 5 7 1
2 0 4 6 8 9 8 5 7 1
0 2 4 6 8 9 8 5 7 1
0 2 4 6 8 8 9 5 7 1
0 2 4 6 8 8 5 9 7 1
0 2 4 6 8 5 8 9 7 1
0 2 4 6 5 8 8 9 7 1
0 2 4 5 6 8 8 9 7 1
0 2 4 5 6 8 8 7 9 1
0 2 4 5 6 8 7 8 9 1
0 2 4 5 6 7 8 8 9 1
0 2 4 5 6 7 8 8 1 9 
0 2 4 5 6 7 8 1 8 9 
0 2 4 5 6 7 1 8 8 9
0 2 4 5 6 1 7 8 8 9
0 2 4 5 1 6 7 8 8 9
0 2 4 1 5 6 7 8 8 9
0 2 1 4 5 6 7 8 8 9
0 1 2 4 5 6 7 8 8 9