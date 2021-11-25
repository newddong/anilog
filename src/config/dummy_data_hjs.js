export const dummy_ProtectRequestList = [
	{
		//@FeedObject
		feed_type: 'feed', //Enum(‘feed’,’missing’,’report’), //게시글의 타잎, ‘일반게시물(feed)’,’실종게시물(missing)’,’제보게시물(report)’로 나뉨

		// @UserObject
		shelter_name: '양평보호소',

		// @ShelterProtectAnimalObject
		protect_animal_photos: [
			'data:image/jpeg;base64,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',
		],
		protect_animal_rescue_location: '한강시민공원', //보호중인 동물의 구조장소
		protect_animal_species: '개', //보호중인 동물의 종류(ex 개, 고양이, 토끼)
		protect_animal_species_detail: '리트리버', //보호중인 동물의 종류(ex 리트리버, 푸들, 진돗개)
		protect_animal_sex: 'female', //보호중인 동물의 성별
		protect_animal_status: 'rescue', // Enum(‘rescue’,’adopt’,’protect’,’rainbowbridge’,’discuss’), //보호중인 동물의 상태
		protect_animal_adoption_days_remain: 2,
		protect_animal_protect_request: true,

		// @ProtectRequestObject
		protect_request_photo_thumbnail:
			'data:image/jpeg;base64,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', //보호요청 게시물 썸네일 uri
		protect_request_status: 'rescue', //항목 추가 필요
		protect_request_date: '2021-12-01', //보호요청 게시글 작성일시
	},
	{
		//@FeedObject
		feed_type: 'feed',

		// @UserObject
		shelter_name: '여의도보호소',

		// @ShelterProtectAnimalObject
		protect_animal_photos: ['http://webimage.10x10.co.kr/image/basic600/296/B002963730.jpg'],
		protect_animal_rescue_location: '버스정류장', //보호중인 동물의 구조장소
		protect_animal_species: '개', //보호중인 동물의 종류(ex 개, 고양이, 토끼)
		protect_animal_species_detail: '퍼그', //보호중인 동물의 종류(ex 리트리버, 푸들, 진돗개)
		protect_animal_sex: 'female', //보호중인 동물의 성별
		protect_animal_status: 'rescue', // Enum(‘rescue’,’adopt’,’protect’,’rainbowbridge’,’discuss’), //보호중인 동물의 상태
		protect_animal_adoption_days_remain: 3,
		protect_animal_protect_request: true,

		// @ProtectRequestObject
		protect_request_photo_thumbnail: 'http://webimage.10x10.co.kr/image/basic600/296/B002963730.jpg', //보호요청 게시물 썸네일 uri
		protect_request_status: 'rescue', //항목 추가 필요
		protect_request_date: '2021-12-03', //보호요청 게시글 작성일시
	},
	{
		//@FeedObject
		feed_type: 'feed',

		// @UserObject
		shelter_name: '한라산보호소',

		// @ShelterProtectAnimalObject
		protect_animal_photos: ['https://t1.daumcdn.net/cfile/tistory/213E434754D3A06406'],
		protect_animal_rescue_location: '버스정류장', //보호중인 동물의 구조장소
		protect_animal_species: '개', //보호중인 동물의 종류(ex 개, 고양이, 토끼)
		protect_animal_species_detail: '퍼그', //보호중인 동물의 종류(ex 리트리버, 푸들, 진돗개)
		protect_animal_sex: 'female', //보호중인 동물의 성별
		protect_animal_status: 'rescue', // Enum(‘rescue’,’adopt’,’protect’,’rainbowbridge’,’discuss’), //보호중인 동물의 상태
		protect_animal_adoption_days_remain: 3,
		protect_animal_protect_request: true,

		// @ProtectRequestObject
		protect_request_photo_thumbnail: 'https://t1.daumcdn.net/cfile/tistory/213E434754D3A06406', //보호요청 게시물 썸네일 uri
		protect_request_status: 'rescue', //항목 추가 필요
		protect_request_date: '2021-12-03', //보호요청 게시글 작성일시
	},
	{
		//@FeedObject
		feed_type: 'feed',

		// @UserObject
		shelter_name: '익산보호소',

		// @ShelterProtectAnimalObject
		protect_animal_photos: ['https://upload.wikimedia.org/wikipedia/commons/0/06/EnglishSpotRabbitChocolate1%28cropped%29.jpg'],
		protect_animal_rescue_location: '버스정류장', //보호중인 동물의 구조장소
		protect_animal_species: '토끼', //보호중인 동물의 종류(ex 개, 고양이, 토끼)
		protect_animal_species_detail: '집토끼', //보호중인 동물의 종류(ex 리트리버, 푸들, 진돗개)
		protect_animal_sex: 'female', //보호중인 동물의 성별
		protect_animal_status: 'rescue', // Enum(‘rescue’,’adopt’,’protect’,’rainbowbridge’,’discuss’), //보호중인 동물의 상태
		protect_animal_adoption_days_remain: 3,
		protect_animal_protect_request: true,
		protect_animal_writer_id: '익산보호소',

		// @ProtectRequestObject
		protect_request_photo_thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/0/06/EnglishSpotRabbitChocolate1%28cropped%29.jpg', //보호요청 게시물 썸네일 uri
		protect_request_status: 'rescue', //항목 추가 필요
		protect_request_date: '2021-12-03', //보호요청 게시글 작성일시
	},
];

export const dummy_MissingReportList = [
	{
		//임시로 지정
		protect_animal_photos: ['https://t1.daumcdn.net/tistoryfile/fs8/1_tistory_2008_10_03_18_17_48e5e30cc7a63??original'],

		// @FeedObject
		feed_thumbnail: 'https://t1.daumcdn.net/tistoryfile/fs8/1_tistory_2008_10_03_18_17_48e5e30cc7a63??original',
		feed_type: 'missing',
		missing_animal_species: '새', //실종 동물의 종류(ex 강아지, 고양이, 토끼 등)
		missing_animal_species_detail: '앵무새', //실종 동물의 세부 종류(ex 리트리버, 불독, 진돗개 등)
		missing_animal_sex: 'female', //실종 동물의 성별
		missing_animal_age: '3살', //실종 동물의 나이
		missing_animal_lost_location: '집안(창문으로 나감)', //실종 동물의 실종 지역 혹은 장소
		missing_animal_features: '실시간 말이 많음', //실종 동물의 특징
		missing_animal_date: '2021-01-03', //실종일
	},
	{
		//임시로 지정
		protect_animal_photos: ['https://www.nemopan.com/files/attach/images/166591/048/279/014/9dbf33d246404d5f20481c6703064f4b.jpg'],

		// @FeedObject
		feed_thumbnail: 'https://www.nemopan.com/files/attach/images/166591/048/279/014/9dbf33d246404d5f20481c6703064f4b.jpg',
		feed_type: 'missing',
		missing_animal_species: '개', //실종 동물의 종류(ex 강아지, 고양이, 토끼 등)
		missing_animal_species_detail: '리트리버', //실종 동물의 세부 종류(ex 리트리버, 불독, 진돗개 등)
		missing_animal_sex: 'male', //실종 동물의 성별
		missing_animal_age: '8살', //실종 동물의 나이
		missing_animal_lost_location: '공덕역', //실종 동물의 실종 지역 혹은 장소
		missing_animal_features: '온몸이 갈색이며, 무엇이든 잘 물어 뜯음', //실종 동물의 특징
		missing_animal_date: '2021-02-11', //실종일
	},
	{
		//임시로 지정
		protect_animal_photos: ['https://pds.joins.com/news/component/newsis/201609/11/NISI20160909_0012162773_web.jpg'],

		// @FeedObject
		feed_thumbnail: 'https://pds.joins.com/news/component/newsis/201609/11/NISI20160909_0012162773_web.jpg',
		feed_type: 'missing',
		missing_animal_species: '개', //실종 동물의 종류(ex 강아지, 고양이, 토끼 등)
		missing_animal_species_detail: '시베리안허스키', //실종 동물의 세부 종류(ex 리트리버, 불독, 진돗개 등)
		missing_animal_sex: 'male', //실종 동물의 성별
		missing_animal_age: '3살', //실종 동물의 나이
		missing_animal_lost_location: '서울역', //실종 동물의 실종 지역 혹은 장소
		missing_animal_features: '잘 째려봄', //실종 동물의 특징
		missing_animal_date: '2021-09-18', //실종일
	},
	{
		//임시로 지정
		protect_animal_photos: ['http://image.dongascience.com/Photo/2017/06/14975908453479.JPG'],

		// @FeedObject
		feed_thumbnail: 'http://image.dongascience.com/Photo/2017/06/14975908453479.JPG',
		feed_type: 'missing',
		missing_animal_species: '개', //실종 동물의 종류(ex 강아지, 고양이, 토끼 등)
		missing_animal_species_detail: '리트리버', //실종 동물의 세부 종류(ex 리트리버, 불독, 진돗개 등)
		missing_animal_sex: 'female', //실종 동물의 성별
		missing_animal_age: '4살', //실종 동물의 나이
		missing_animal_lost_location: '연세대 후문', //실종 동물의 실종 지역 혹은 장소
		missing_animal_features: '털이 비교적 없는 편이며, 잘 짖는 편', //실종 동물의 특징
		missing_animal_date: '2021-08-02', //실종일
	},
	{
		//임시로 지정
		protect_animal_photos: ['https://cdn.imweb.me/upload/S201712205a3a0910b89f5/a2470afad8a92.jpg'],

		// @FeedObject
		feed_thumbnail: 'https://cdn.imweb.me/upload/S201712205a3a0910b89f5/a2470afad8a92.jpg',
		feed_type: 'missing', //Enum(‘feed’,’missing’,’report’), //게시글의 타잎, ‘일반게시물(feed)’,’실종게시물(missing)’,’제보게시물(report)’로 나뉨
		missing_animal_species: '고양이', //실종 동물의 종류(ex 강아지, 고양이, 토끼 등)
		missing_animal_species_detail: '잡종', //실종 동물의 세부 종류(ex 리트리버, 불독, 진돗개 등)
		missing_animal_sex: 'female', //실종 동물의 성별
		missing_animal_age: '7살', //실종 동물의 나이
		missing_animal_lost_location: '목동 푸르지오 분수대', //실종 동물의 실종 지역 혹은 장소
		missing_animal_features: '갈색과 흰색 얼룩이며, 햇볕쬐는 것을 좋아함', //실종 동물의 특징
		missing_animal_date: '2021-11-29', //실종일
	},
];

export const dummy_AppliesRecord_protect = [
	{
		//@FeedObject
		feed_type: 'feed',

		protect_animal_photos: ['https://newspenguin.com/news/photo/202006/1837_5156_215.jpg'], //보호중인 동물 사진
		protect_animal_rescue_date: '2021-11-24', //보호중인 동물의 구조일자(보호소가 동물을 맡은 일자)
		protect_animal_rescue_location: '자운동', //보호중인 동물의 구조장소
		protect_animal_species: '고양이', //보호중인 동물의 종류(ex 개, 고양이, 토끼)
		protect_animal_species_detail: '하이엠', //보호중인 동물의 종류(ex 리트리버, 푸들, 진돗개)
		protect_animal_sex: 'male', //보호중인 동물의 성별
		protect_animal_neutralization: 'yes', //중성화 여부
		protect_animal_estimate_age: '6개월', //보호중인 동물의 추정 연령
		protect_animal_weight: '1.2', //몸무게

		protect_animal_status: 'discuss', // Enum(‘rescue’,’adopt’,’protect’,’rainbowbridge’,’discuss’), //보호중인 동물의 상태
		protect_animal_adoption_days_remain: 23,
		protect_animal_protect_request: true,
		//기본상태는 rescue임 (동물이 구조되어 보호소로 들어온 최초 상태)
		//임시보호가 되면 protect로 변경
		//입양을 가게 되면 상태가 adopt로 변경
		//임시보호, 입양 협의중이면 discuss로 변경
		//안락사, 혹은 폐사상태가 되면 rainbowbridge로 변경

		protect_request_date: '2021-03-01', //등록일
		shelter_name: '서울보호소', //보호소 이름 (보호장소)
		protect_animal_rescue_location: '반포대교 밑', //구조지역
	},

	{
		//@FeedObject
		feed_type: 'feed',

		protect_animal_photos: ['https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202109/19/7266c35b-f00e-4582-937a-61321be44667.jpg'], //보호중인 동물 사진
		protect_animal_rescue_date: '2021-11-24', //보호중인 동물의 구조일자(보호소가 동물을 맡은 일자)
		protect_animal_species: '고양이', //보호중인 동물의 종류(ex 개, 고양이, 토끼)
		protect_animal_species_detail: '라이컷', //보호중인 동물의 종류(ex 리트리버, 푸들, 진돗개)
		protect_animal_sex: 'male', //보호중인 동물의 성별
		protect_animal_neutralization: 'yes', //중성화 여부
		protect_animal_estimate_age: '6개월', //보호중인 동물의 추정 연령
		protect_animal_weight: '1.2', //몸무게

		protect_animal_status: 'discuss', // Enum(‘rescue’,’adopt’,’protect’,’rainbowbridge’,’discuss’), //보호중인 동물의 상태
		protect_animal_adoption_days_remain: 2,
		protect_animal_protect_request: true,
		//기본상태는 rescue임 (동물이 구조되어 보호소로 들어온 최초 상태)
		//임시보호가 되면 protect로 변경
		//입양을 가게 되면 상태가 adopt로 변경
		//임시보호, 입양 협의중이면 discuss로 변경
		//안락사, 혹은 폐사상태가 되면 rainbowbridge로 변경

		protect_request_date: '2021-08-22', //등록일
		shelter_name: '익산보호소', //보호소 이름 (보호장소)
		protect_animal_rescue_location: '김포공원', //구조지역
	},
];

export const dummy_AppliesRecord_rescue = [
	{
		//@FeedObject
		feed_type: 'feed',

		protect_animal_photos: ['http://www.cctvnews.co.kr/news/photo/202009/209212_209761_1939.jpg'], //보호중인 동물 사진
		protect_animal_rescue_date: '2021-11-24', //보호중인 동물의 구조일자(보호소가 동물을 맡은 일자)
		protect_animal_species: '강아지', //보호중인 동물의 종류(ex 개, 고양이, 토끼)
		protect_animal_species_detail: '말티즈', //보호중인 동물의 종류(ex 리트리버, 푸들, 진돗개)
		protect_animal_sex: 'female', //보호중인 동물의 성별
		protect_animal_neutralization: 'no', //중성화 여부
		protect_animal_estimate_age: '2개월', //보호중인 동물의 추정 연령
		protect_animal_weight: '1.2', //몸무게

		protect_animal_status: 'rescue', // Enum(‘rescue’,’adopt’,’protect’,’rainbowbridge’,’discuss’), //보호중인 동물의 상태
		protect_animal_adoption_days_remain: 3,
		protect_animal_protect_request: true,
		//기본상태는 rescue임 (동물이 구조되어 보호소로 들어온 최초 상태)
		//임시보호가 되면 protect로 변경
		//입양을 가게 되면 상태가 adopt로 변경
		//임시보호, 입양 협의중이면 discuss로 변경
		//안락사, 혹은 폐사상태가 되면 rainbowbridge로 변경

		protect_request_date: '2021-09-24', //등록일
		shelter_name: '경기도보호소', //보호소 이름 (보호장소)
		protect_animal_rescue_location: '남산타워', //구조지역
	},
];
