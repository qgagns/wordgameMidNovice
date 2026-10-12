// ========================================================
// ⚙️ [학교 설정] 학교나 시험이 바뀔 때 여기만 수정하세요!
// ========================================================
const GAME_CONFIG = {
    schoolTag: "중등NOVICE",      // 부제 옆에 붙을 학교/버전명 (예: The Trial of EXAM · 덕정고2 ver)
    dbKey: "2026_MiddleNovice",      // 학교별 독립 DB 분리 키 (다른 학교와 랭킹/계정이 안 섞임)

    // ⚔️ [수호령전 체력 & 시간 & 플레이어 목숨]
    guardianHp1: 5,            // 1회차 수호령 체력 (기본: 5)
    guardianTime1: 7.0,        // 1회차 수호령 시간 (기본: 7.0초)

    guardianHpRepeat: 7,       // 2회차 수호령 체력 (기본: 7)
    guardianTimeRepeat: 5.0,   // 2회차 수호령 시간 (기본: 5.0초)
    guardianPlayerHpRepeat: 3, // 👈 2회차 수호령전 플레이어 하트 수 (기본: 3개)

    // 👑 [마왕전 체력 & 시간 & 플레이어 목숨]
    bossHp1: 10,               // 1회차 마왕 체력 (기본: 10)
    bossTime1: 5.0,            // 1회차 마왕 시간 (기본: 5.0초)

    bossHpRepeat: 12,          // 2회차 마왕 체력 (기본: 12)
    bossTimeRepeat: 4.0,       // 2회차 마왕 시간 (기본: 4.0초)
    bossPlayerHpRepeat: 3,     // 👈 2회차 마왕전 플레이어 하트 수 (기본: 3개)

    // 🔥 [시험 직전 파이널] 하드코어 마왕전 설정
    hardcoreMode: {
        enabled: true,                       // 켜기(true) / 끄기(false)
        title: "책 선생의 하드코어 점검",            // 시험 명칭
        targetMaps: "all",                   // "all" 또는 ["ch1", "ch2"]
        hp: 15,                              // 출제 문제 수 (마왕 체력)
        playerHp: 3,                         // 👈 하드코어 플레이어 하트 수 (기본: 3개, 1개로 하면 원코인 데스!)
        timeLimit: 3                       // 문제당 제한 시간 (초)
    }
};

// 🌿 [정령의 세계 지도]
// 새로운 맵을 만들고 싶으면 그냥 [맵 이름]을 적고 아래에 단어들을 적으시면 됩니다!
// 이름 후보군: 숲, 나무, 식물, 정원, 골짜기, 자연
//            호수, 바다, 물, 강, 샘, 폭포, 섬, 
//            하늘, 바람, 구름, 산, 고원, 언덕, 별
//            유적, 신전, 사원, 도서관, 책, 고대, 교과서

const WORLD_MAPS_TEXT = `

[m1-1: M1 - 숲의 모험]
# 모험을 시작하는 기본 어휘들
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

[m1-2: M1 - 바람의 길]
# 성공과 실패를 거치며 앞으로 나아가는 어휘들
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

[m1-3: M1 - 사람과 세상]
# 세상과 사람, 경험과 관계를 나타내는 단어들
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


[m1-4: M1 - 생각과 지식]
# 생각과 사회, 가치와 지식을 이해하는 어휘들
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


[irreg_verbs: 불규칙 동사의 늪]
# 제멋대로 모습을 바꾸는 동사 정령들이 서식하는 늪
drive (drove, driven): [동] 운전하다, 몰다
ride (rode, ridden): [동] 타다
write (wrote, written): [동] 쓰다
break (broke, broken): [동] 부수다
choose (chose, chosen): [동] 선택하다, 고르다
freeze (froze, frozen): [동] 얼다, 얼리다
speak (spoke, spoken): [동] 말하다
steal (stole, stolen): [동] 훔치다
get (got, gotten/got): [동] 얻다; ~해지다
forget (forgot, forgotten): [동] 잊다
begin (began, begun): [동] 시작하다
drink (drank, drunk): [동] 마시다
run (ran, run): [동] 달리다
shrink (shrank, shrunk): [동] 줄어들다
sing (sang, sung): [동] 노래하다
spring (sprang, sprung): [동] 튀어 오르다
swim (swam, swum): [동] 수영하다
take (took, taken): [동] 잡다, 가지다
shake (shook, shaken): [동] 흔들다, 흔들리다
mistake (mistook, mistaken): [동] 실수하다
blow (blew, blown): [동] 불다
fly (flew, flown): [동] 날다, 날리다
grow (grew, grown): [동] 자라다; 키우다
know (knew, known): [동] 알고 있다
throw (threw, thrown): [동] 던지다
withdraw (withdrew, withdrawn): [동] 철회하다
swear (swore, sworn): [동] 맹세하다
tear (tore, torn): [동] 찢다
wear (wore, worn): [동] 입다
show (showed, showed/shown): [동] 보여주다
be (was/were, been): [동] 있다/이다
beat (beat, beaten): [동] 때리다
become (became, become): [동] 되다
bite (bit, bitten): [동] 물다
come (came, come): [동] 오다
do (did, done): [동] 하다
eat (ate, eaten): [동] 먹다
fall (fell, fallen): [동] 떨어지다, 넘어지다
forbid (forbade, forbidden): [동] 금지하다
give (gave, given): [동] 주다
forgive (forgave, forgiven): [동] 용서하다
go (went, gone): [동] 가다
hide (hid, hidden): [동] 숨다, 숨기다
lie (lay, lain): [동] 눕다
see (saw, seen): [동] 보다
bleed (bled, bled): [동] 피를 흘리다
feed (fed, fed): [동] 먹이다
lead (led, led): [동] 이끌다
meet (met, met): [동] 만나다
read (read, read): [동] 읽다
shoot (shot, shot): [동] 쏘다, 발사하다
sleep (slept, slept): [동] 자다
speed (sped, sped): [동] 속도를 내다
hear (heard, heard): [동] 듣다
dig (dug, dug): [동] 파다
hang (hung, hung): [동] 매달다, 걸다
stick (stuck, stuck): [동] 찌르다; 붙이다
strike (struck, struck): [동] 치다, 때리다
wake (woke, woken): [동] 깨우다
shine (shone, shone): [동] 빛나다, 광을 내다
win (won, won): [동] 이기다; 얻다
build (built, built): [동] 세우다, 짓다
lend (lent, lent): [동] 빌려주다
lose (lost, lost): [동] 잃다; 지다
send (sent, sent): [동] 보내다
spend (spent, spent): [동] (돈, 시간 등을)사용하다, 쓰다
deal (dealt, dealt): [동] 다루다; 거래하다
mean (meant, meant): [동] 의미하다
bend (bent, bent): [동] 구부리다
feel (felt, felt): [동] 느끼다
hold (held, held): [동] 잡다, 쥐다
keep (kept, kept): [동] 유지하다; 기르다
leave (left, left): [동] 떠나다; 남겨두다
bring (brought, brought): [동] 가져오다
buy (bought, bought): [동] 사다
catch (caught, caught): [동] 잡다
fight (fought, fought): [동] 싸우다
seek (sought, sought): [동] 찾다, 추구하다
teach (taught, taught): [동] 가르치다
think (thought, thought): [동] 생각하다
find (found, found): [동] 찾다, 발견하다
pay (paid, paid): [동] 지불하다
say (said, said): [동] 말하다
stand (stood, stood): [동] 서다
understand (understood, understood): [동] 이해하다
sell (sold, sold): [동] 팔다
tell (told, told): [동] 말하다
have (had, had): [동] 가지고 있다, 소유하고 있다
light (lit, lit): [동] (불을)켜다, 밝히다
make (made, made): [동] 만들다
sit (sat, sat): [동] 앉다
slide (slid, slid): [동] 미끄러지다
burst (burst, burst): [동] 터뜨리다
cost (cost, cost): [동] 비용이~가 들다
cut (cut, cut): [동] 자르다
hit (hit, hit): [동] 치다
hurt (hurt, hurt): [동] 다치게 하다; 아프다
put (put, put): [동] 두다, 놓다
set (set, set): [동] 놓다; 마련하다
shut (shut, shut): [동] 닫다, 잠그다
spread (spread, spread): [동] 펴다, 펼치다


[irreg_nouns: 불규칙 명사의 언덕]
# 제멋대로 모습을 바꾸는 명사 정령들이 서식하는 언덕
man (men): [명] 남자, 사람
woman (women): [명] 여자
child (children): [명] 아이, 어린이
person (people): [명] 사람
foot (feet): [명] 발
tooth (teeth): [명] 이, 치아
goose (geese): [명] 거위
mouse (mice): [명] 쥐
ox (oxen): [명] 황소
louse (lice): [명] 이(곤충)
sheep (sheep): [명] 양
deer (deer): [명] 사슴
fish (fish): [명] 물고기, 생선
species (species): [명] 종(생물 분류 단위)
series (series): [명] 연속, 시리즈
aircraft (aircraft): [명] 항공기
leaf (leaves): [명] 나뭇잎
half (halves): [명] 절반, 반
knife (knives): [명] 칼
wife (wives): [명] 아내
life (lives): [명] 삶, 목숨
thief (thieves): [명] 도둑
wolf (wolves): [명] 늑대
shelf (shelves): [명] 선반
calf (calves): [명] 송아지, 종아리
loaf (loaves): [명] (빵 한) 덩어리
datum (data): [명] 자료, 데이터
medium (media): [명] 매체, 대중매체
bacterium (bacteria): [명] 박테리아, 세균
curriculum (curricula): [명] 교육과정, 커리큘럼
criterion (criteria): [명] 기준, 표준
phenomenon (phenomena): [명] 현상
crisis (crises): [명] 위기
basis (bases): [명] 근거, 기초
analysis (analyses): [명] 분석
hypothesis (hypotheses): [명] 가설
oasis (oases): [명] 오아시스
stimulus (stimuli): [명] 자극, 자극제
fungus (fungi): [명] 균류, 곰팡이
cactus (cacti): [명] 선인장


[irreg_ads: 불규칙 형용사/부사의 굴]
# 제멋대로 모습을 바꾸는 형용사/부사 정령들이 서식하는 굴
good (better, best): [형] 좋은
well (better, best): [부] 잘, 좋게
bad (worse, worst): [형] 나쁜
ill (worse, worst): [형] 아픈, 나쁜
badly (worse, worst): [부] 심하게, 나쁘게
many (more, most): [형] 많은 (셀 수 있는 명사 수식)
much (more, most): [형/부] 많은, 많이 (셀 수 없는 명사 수식)
little (less, least): [형/부] 적은, 적게 (양/정도)
far (farther, farthest): [형/부] 더 먼, 가장 먼 (물리적 거리)
far (further, furthest): [형/부] 더 나아간, 한층 더 (정도·깊이)
late (later, latest): [형/부] 더 늦은, 가장 최근의 (시간 기준)
late (latter, last): [형] (둘 중) 후자의, 마지막의 (순서 기준)
old (older, oldest): [형] 더 나이 든, 가장 오래된 (나이·연식)
old (elder, eldest): [형] 손위의, 가장 맏이의 (가족 서열)


`;
