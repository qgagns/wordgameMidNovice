// 🌿 [정령의 세계 지도]
// 새로운 맵을 만들고 싶으면 그냥 [맵 이름]을 적고 아래에 단어들을 적으시면 됩니다!
// 이름 후보군: 숲, 나무, 식물, 정원, 골짜기, 자연
//            호수, 바다, 물, 강, 샘, 폭포, 섬, 
//            하늘, 바람, 구름, 산, 고원, 언덕, 별
//            유적, 신전, 사원, 도서관, 책, 고대, 교과서

const WORLD_MAPS_TEXT = `

[숲의 모험]
# 평범한 행동부터 생각과 관계까지, 모험을 시작하는 기본 동사들
decide:[동] 결정하다
introduce:[동] 소개하다
continue:[동] 계속하다
invent:[동] 발명하다
imagine:[동] 상상하다
happen:[동] 일어나다
depend:[동] 의존하다, ~에 달려 있다
apply:[동] 적용하다, 신청하다
allow:[동] 허락하다
prepare:[동] 준비하다
choose:[동] 선택하다
follow:[동] 따라가다, 따르다
bring:[동] 가져오다
offer:[동] 제공하다, 제안하다
spend:[동] (시간·돈을) 쓰다
expect:[동] 기대하다, 예상하다
fill:[동] 채우다
lend:[동] 빌려주다
try:[동] 노력하다, 시도하다
sell:[동] 팔다
guess:[동] 추측하다
forget:[동] 잊다
return:[동] 돌아오다, 돌려주다
call:[동] 부르다, 전화하다
carry:[동] 나르다, 가지고 다니다
add:[동] 더하다, 추가하다
suppose:[동] 추측하다, 가정하다
invite:[동] 초대하다
agree:[동] 동의하다
prevent:[동] 막다, 예방하다
check:[동] 확인하다
improve:[동] 향상시키다
join:[동] 가입하다, 함께하다
explain:[동] 설명하다
receive:[동] 받다
become:[동] ~이 되다
lead:[동] 이끌다
connect:[동] 연결하다
understand:[동] 이해하다
provide:[동] 제공하다
win:[동] 이기다
worry:[동] 걱정하다
grow:[동] 자라다, 성장하다
study:[동] 공부하다
keep:[동] 유지하다, 계속하다
collect:[동] 모으다
fail:[동] 실패하다
appear:[동] 나타나다
seem:[동] ~처럼 보이다
discuss:[동] 토론하다

[하늘과 바람의 길]
# 성장과 도전, 성공과 실패를 거치며 앞으로 나아가는 동사들
pay:[동] 지불하다
believe:[동] 믿다
remember:[동] 기억하다
wear:[동] 입다, 착용하다
remove:[동] 제거하다
borrow:[동] 빌리다
make:[동] 만들다
help:[동] 돕다
fix:[동] 고치다
hurt:[동] 다치게 하다, 아프다
warn:[동] 경고하다
select:[동] 선택하다
create:[동] 만들다, 창조하다
charge:[동] 청구하다, 충전하다
share:[동] 공유하다
succeed:[동] 성공하다
avoid:[동] 피하다
communicate:[동] 의사소통하다
increase:[동] 증가하다
realize:[동] 깨닫다
refuse:[동] 거절하다
consider:[동] 고려하다
recover:[동] 회복하다
include:[동] 포함하다
enable:[동] 가능하게 하다
reduce:[동] 줄이다
require:[동] 요구하다
participate:[동] 참여하다
develop:[동] 개발하다, 발전시키다
deliver:[동] 배달하다, 전달하다
attend:[동] 참석하다
suggest:[동] 제안하다
serve:[동] 제공하다, 봉사하다
demand:[동] 요구하다
affect:[동] 영향을 미치다
operate:[동] 작동하다, 운영하다
discover:[동] 발견하다
describe:[동] 묘사하다, 설명하다
compare:[동] 비교하다
protect:[동] 보호하다
produce:[동] 생산하다
gain:[동] 얻다, 증가하다
lose:[동] 잃다, 지다
remain:[동] 남아 있다
respect:[동] 존중하다
explore:[동] 탐험하다
recycle:[동] 재활용하다
disappoint:[동] 실망시키다
accept:[동] 받아들이다
reach:[동] 도달하다

[호수와 자연의 세계]
# 세상과 사람을 이해하며 얻는 경험과 관계를 나타내는 핵심 명사들
cause:[동] 일으키다, 원인이 되다
earn:[동] 벌다
repeat:[동] 반복하다
exist:[동] 존재하다
advise:[동] 조언하다
replace:[동] 교체하다, 대신하다
steal:[동] 훔치다
prove:[동] 증명하다
behave:[동] 행동하다
obtain:[동] 얻다
destroy:[동] 파괴하다
feed:[동] 먹이다
deal:[동] 다루다, 거래하다
reply:[동] 대답하다, 답장하다
occur:[동] 발생하다
ignore:[동] 무시하다
treat:[동] 다루다, 치료하다
mention:[동] 언급하다
educate:[동] 교육하다
manage:[동] 관리하다, 해내다
express:[동] 표현하다
attract:[동] 끌어당기다
complete:[동] 완성하다
escape:[동] 탈출하다
contain:[동] 포함하다
represent:[동] 나타내다, 대표하다
inform:[동] 알리다
persuade:[동] 설득하다
establish:[동] 설립하다, 확립하다
perform:[동] 공연하다, 수행하다
donate:[동] 기부하다
differ:[동] 다르다
argue:[동] 주장하다, 논쟁하다
organize:[동] 조직하다, 정리하다
overcome:[동] 극복하다
motivate:[동] 동기를 부여하다
reflect:[동] 반영하다, 반사하다
contact:[동] 연락하다
benefit:[동] 이익을 얻다
progress:[동] 진전되다
effort:[명] 노력
habit:[명] 습관
reason:[명] 이유
idea:[명] 생각, 아이디어
future:[명] 미래
success:[명] 성공
meaning:[명] 의미
knowledge:[명] 지식
difference:[명] 차이
effect:[명] 영향, 효과


[고대 도서관의 비밀]
# 생각과 사회, 가치와 지식을 이해하는 추상적 핵심어와 묘사어
behavior:[명] 행동
situation:[명] 상황
choice:[명] 선택
decision:[명] 결정
purpose:[명] 목적
environment:[명] 환경
skill:[명] 기술, 능력
experience:[명] 경험
opportunity:[명] 기회
ability:[명] 능력
responsibility:[명] 책임
attitude:[명] 태도
competition:[명] 경쟁
solution:[명] 해결책
method:[명] 방법
adventure:[명] 모험
resource:[명] 자원
control:[명] 통제, 조절
project:[명] 프로젝트
stress:[명] 스트레스
problem:[명] 문제
health:[명] 건강
chance:[명] 기회, 가능성
information:[명] 정보
practice:[명] 연습, 실행
opinion:[명] 의견
danger:[명] 위험
world:[명] 세계
culture:[명] 문화
society:[명] 사회
government:[명] 정부
pollution:[명] 오염
climate:[명] 기후
community:[명] 지역 사회
research:[명] 연구
quality:[명] 질
quantity:[명] 양
goal:[명] 목표
target:[명] 목표, 표적
value:[명] 가치
truth:[명] 진실
fact:[명] 사실
system:[명] 체계, 시스템
direction:[명] 방향
communication:[명] 의사소통
context:[명] 문맥, 맥락
sentence:[명] 문장
subject:[명] 주제, 과목
content:[명] 내용
character:[명] 등장인물, 성격

`;
