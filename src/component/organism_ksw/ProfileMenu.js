import React from 'react';
import {Text, View} from 'react-native';
import {GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {FavoriteTag46_Filled, NextMark, Paw46} from '../atom/icon';
import {profileMenu} from './style_organism';

export default ProfileMenu = props => {
	return (
		<View style={[profileMenu.container]}>
			{/* 즐겨찾기 */}
			<View style={[profileMenu.upperMenu]}>
				<View style={[profileMenu.titleContainer]}>
					<FavoriteTag46_Filled />
					<View style={[profileMenu.title]}>
						<Text style={[txt.noto24b, {color: GRAY10}]}>즐겨찾기</Text>
					</View>
				</View>
				<View style={[profileMenu.bottomeContainer]}>
					<View style={[profileMenu.itemContainer]}>
						<View style={[profileMenu.item_step1]}>
							<View style={[profileMenu.item]}>
								<View style={[profileMenu.item_text]}>
									<Text style={[txt.noto24, {color: GRAY10}]}>친구</Text>
								</View>
								<View style={[profileMenu.item_bracket]}>
									<NextMark />
								</View>
							</View>
							<View style={[profileMenu.vertical_separator]} />
							<View style={[profileMenu.item]}>
								<View style={[profileMenu.item_text]}>
									<Text style={[txt.noto24, {color: GRAY10}]}>피드 게시글</Text>
								</View>
								<View style={[profileMenu.item_bracket]}>
									<NextMark />
								</View>
							</View>
						</View>
					</View>
					<View style={{flexDirection: 'row'}}>
						<View style={[profileMenu.horizon_separator]} />
						<View style={[profileMenu.horizon_separator]} />
					</View>
					<View style={[profileMenu.itemContainer]}>
						<View style={[profileMenu.item_step1]}>
							<View style={[profileMenu.item]}>
								<View style={[profileMenu.item_text]}>
									<Text style={[txt.noto24, {color: GRAY10}]}>보호요청 (저장)</Text>
								</View>
								<View style={[profileMenu.item_bracket]}>
									<NextMark />
								</View>
							</View>
							<View style={[profileMenu.vertical_separator]} />
							<View style={[profileMenu.item]}>
								<View style={[profileMenu.item_text]}>
									<Text style={[txt.noto24, {color: GRAY10}]}>커뮤니티</Text>
								</View>
								<View style={[profileMenu.item_bracket]}>
									<NextMark />
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
			{/* 나의 활동 */}
			<View style={[profileMenu.lowerMenu]}>
				<View style={[profileMenu.titleContainer]}>
					<Paw46 />
					<View style={[profileMenu.title]}>
						<Text style={[txt.noto24b, {color: GRAY10}]}>나의 활동</Text>
					</View>
				</View>
				<View style={[profileMenu.bottomeContainer]}>
					{/* 1층 메뉴 */}
					<View style={[profileMenu.itemContainer]}>
						<View style={[profileMenu.item_step1]}>
							<View style={[profileMenu.item]}>
								<View style={[profileMenu.item_text]}>
									<Text style={[txt.noto24, {color: GRAY10}]}>내 게시글</Text>
								</View>
								<View style={[profileMenu.item_bracket]}>
									<NextMark />
								</View>
							</View>
							<View style={[profileMenu.vertical_separator]} />
							<View style={[profileMenu.item]}>
								<View style={[profileMenu.item_text]}>
									<Text style={[txt.noto24, {color: GRAY10}]}>나를 태그한 글</Text>
								</View>
								<View style={[profileMenu.item_bracket]}>
									<NextMark />
								</View>
							</View>
						</View>
					</View>
					{/* 가로선 */}
					<View style={{flexDirection: 'row'}}>
						<View style={[profileMenu.horizon_separator]} />
						<View style={[profileMenu.horizon_separator]} />
					</View>
					{/* 2층 메뉴 */}
					<View style={[profileMenu.itemContainer]}>
						<View style={[profileMenu.item_step1]}>
							<View style={[profileMenu.item]}>
								<View style={[profileMenu.item_text]}>
									<Text style={[txt.noto24, {color: GRAY10}]}>신청 내역</Text>
								</View>
								<View style={[profileMenu.item_bracket]}>
									<NextMark />
								</View>
							</View>
							<View style={[profileMenu.vertical_separator]} />
							<View style={[profileMenu.item]}>
								<View style={[profileMenu.item_text]}>
									<Text style={[txt.noto24, {color: GRAY10}]}>동물 보호 현황</Text>
								</View>
								<View style={[profileMenu.item_bracket]}>
									<NextMark />
								</View>
							</View>
						</View>
					</View>
					{/* 가로선 */}
					<View style={{flexDirection: 'row'}}>
						<View style={[profileMenu.horizon_separator]} />
						<View style={[profileMenu.horizon_separator]} />
					</View>
					{/* 3층 메뉴 */}
					<View style={[profileMenu.itemContainer]}>
						<View style={[profileMenu.item_step1]}>
							<View style={[profileMenu.item]}>
								<View style={[profileMenu.item_text]}>
									<Text style={[txt.noto24, {color: GRAY10}]}>커뮤니티</Text>
								</View>
								<View style={[profileMenu.item_bracket]}>
									<NextMark />
								</View>
							</View>
							<View style={[profileMenu.vertical_separator]} />
							<View style={[profileMenu.item]}>
								<View style={[profileMenu.item_text]}>
									<Text style={[txt.noto24, {color: GRAY10}]}>쪽지함</Text>
								</View>
								<View style={[profileMenu.item_bracket]}>
									<NextMark />
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};
