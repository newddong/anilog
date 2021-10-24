import React from 'react';

import heartFilled from './heartFilled'
import heartBorder from './heartBorder'
import paw30 from './paw30'
import paw30Mixed from './paw30Mixed'
import private30 from './private30'
import public30 from './public30'
import cat38 from './cat38'
import dog38 from './dog38'
import cross from './cross'
import shelter46 from './shelter46'
import favoriteTagFilled from './favoriteTagFilled'
import paw46 from './paw46'
import setting46 from './setting46'
import search48 from './search48'
import alarmBadger48 from './alarmBadger48'
import radioChecked48 from './radioChecked48'
import radioUnchecked48 from './radioUnchecked48'
import public48 from './public48'
import private48 from './private48'
import like48Border from './like48Border'
import like48Filled from './like48Filled'
import comment48Border from './comment48Border'
import paw48_YELL20 from './paw48_YELL20'
import paw48_Mixed from './paw48_Mixed'
import house48 from './house48'
import paw48 from './paw48'
import telephone48 from './telephone48'
import check from './check'
import rectFilled from './rectFilled'
import rectBorder from './rectBorder'
import calendar48Filled from './calendar48Filled'
import share48Filled from './share48Filled'
import share48Border from './share48Border'
import favoriteTag48Border from './favoriteTag48Border'
import calendar48Border from './calendar48Border'
import person48 from './person48'
import phone48 from './phone48'
import textBalloon48 from './textBalloon48'
import male48 from './male48'
import female48 from './female48'
import videoPlay48 from './videoPlay48'
import imageList48 from './imageList48'
import cancel48 from './cancel48'
import bracket48 from './bracket48'
import starBorder from './starBorder'
import starFilled from './starFilled'
import meatball50h from './meatball50h'
import meatball50v from './meatball50v'
import hash50 from './hash50'
import heart52 from './heart52'
import eye52_apri10 from './eye52_apri10'
import eye52_gray20 from './eye52_gray20'
import location54_apri10 from './location54_apri10'
import location54_gray30 from './location54_gray30'
import camera54 from './camera54'
import pawBorder54 from './pawBorder54'
import location54Filled from './location54Filled'
import sirenRed58 from './sirenRed58'
import sirenWhite58 from './sirenWhite58'
import photo60 from './photo60'
import send60 from './send60'
import send60Big from './send60Big'
import lock60Border from './lock60Border'
import lock60Filled from './lock60Filled'
import dog62 from './dog62'
import cat62 from './cat62'
import rabbit62 from './rabbit62'
import paw62 from './paw62'
import paw62_mixed from './paw62_mixed'
import cancel62 from './cancel62'
import private62 from './private62'
import public62 from './public62'
import addItem64 from './addItem64'
import tag70 from './tag70'
import social_kakao72 from './social_kakao72'
import clip72 from './clip72'
import email72 from './email72'
import flashOff72 from './flashOff72'
import rotate72 from './rotate72'
import flashOn72 from './flashOn72'
import addItem92 from './addItem92'
import write94 from './write94'
import floatAddPet_126x92 from './floatAddPet_126x92'
import floatAddArticle126x92 from './floatAddArticle126x92'
import feedTabBorder from './feedTabBorder'
import animalSavingTabBorder from './animalSavingTabBorder'
import communityTabBorder from './communityTabBorder' 
import myTabBorder from './myTabBorder'
import feedTabFilled from './feedTabFilled'
import animalSavingTabFilled from'./animalSavingTabFilled'
import communityTabFilled from './communityTabFilled'
import myTabFilled from './myTabFilled'
import paw94x90 from './paw94x90'
import cameraLink from './cameraLink'
import hashLabel from './hashLabel'
import tagView from './tagView'
import tagEdit from './tagEdit'
import xMark from './xMark'
import addPet180 from './addPet180'
import urgent_write1 from './urgent_write1'
import urgent_write2 from './urgent_write2'
import leaflet from './leaflet'
import arrow_down from './arrow_down'
import arrow_up from './arrow_up'




import DP from 'Screens/dp';
import { APRI10, YELL20,GRAY20, GRAY30, GRAY10 } from 'Root/config/color';


const size30 = {width:30*DP,height:30*DP};
const size38 = {width:38*DP,height:38*DP};
const size46 = {width:46*DP,height:46*DP};
const size48 = {width:48*DP,height:48*DP};
const size50 = {width:50*DP,height:50*DP};
const size52 = {width:52*DP,height:52*DP};
const size54 = {width:54*DP,height:54*DP};
const size58 = {width:58*DP,height:58*DP};
const size60 = {width:60*DP,height:60*DP};
const size62 = {width:62*DP,height:64*DP};
const size64 = {width:64*DP,height:64*DP};
const size70 = {width:70*DP,height:70*DP};
const size72 = {width:72*DP,height:72*DP};
const size76 = {width:72*DP,height:72*DP};
const size92 = {width:92*DP,height:92*DP};
const size94 = {width:94*DP,height:94*DP};
const size110 = {width:110*DP,height:110*DP};
const size126x92 = {width:126*DP,height:92*DP};

const makeSvg = (component, style, color) => {
    return (
        (props)=>React.createElement(component,{...style,...props,fill:color})
    );
}



export const Heart30Filled = makeSvg(heartFilled, size30, APRI10)
export const Heart30Border = makeSvg(heartBorder, size30, APRI10)
export const Paw30_APRI10 = makeSvg(paw30, size30, APRI10)
export const Paw30_YELL20 = makeSvg(paw30, size30, YELL20)
export const Paw30_Mixed = makeSvg(paw30Mixed,size30, '')
export const Private30 = makeSvg(private30, size30 , '')
export const Public30 = makeSvg(public30, size30, '')
export const Cat38 = makeSvg(cat38, size38)
export const Dog38 = makeSvg(dog38, size38)
export const Cross46 = makeSvg(cross, size46)
export const Shelter46 = makeSvg(shelter46, size46)
export const FavoriteTag46Filled = makeSvg(favoriteTagFilled, size46, APRI10)
export const Paw46 = makeSvg(paw46,size46)
export const Setting46 = makeSvg(setting46, size46)
export const Search48 = makeSvg(search48, size48)
export const AlarmBadger48 = makeSvg(alarmBadger48, size48)
export const RadioChecked48 = makeSvg(radioChecked48, size48)
export const RadioUnchecked48 = makeSvg(radioUnchecked48, size48)
export const Public48 = makeSvg(public48, size48)
export const Private48 = makeSvg(private48, size48)
export const Like48Border = makeSvg(like48Border,size48)
export const Like48Filled = makeSvg(like48Filled, size48)
export const Comment48Border = makeSvg(comment48Border, size48)
export const Heart48Filled = makeSvg(heartFilled, size48, APRI10)
export const Paw48Yell20 = makeSvg(paw48_YELL20, size48, YELL20)
export const Paw48Mixed = makeSvg(paw48_Mixed, size48)
export const House48 = makeSvg(house48, size48)
export const Paw48_APRI10 = makeSvg(paw48, size48)
export const Telephone48 = makeSvg(telephone48,size48)
export const Check48 = makeSvg(check, size48)
export const Rect48_APRI10 = makeSvg(rectFilled, size48, APRI10)
export const Rect48_GRAY30 = makeSvg(rectFilled, size48, GRAY30)
export const Rect48Border = makeSvg(rectBorder, size48,)
export const Calendar48Filled = makeSvg(calendar48Filled, size48)
export const Share48Filled = makeSvg(share48Filled, size48)
export const Share48Border = makeSvg(share48Border, size48)
export const FavoriteTag48Filled = makeSvg(favoriteTagFilled, size48, APRI10)
export const FavoriteTag48Border = makeSvg(favoriteTag48Border, size48, )
export const Calendar48Border = makeSvg(calendar48Border, size48)
export const Cross48 = makeSvg(cross, size48)
export const Person48 = makeSvg(person48,size48)
export const Phone48 = makeSvg(phone48, size48)
export const TextBalloon48 = makeSvg(textBalloon48, size48)
export const Male48 = makeSvg(male48, size48)
export const Female48 = makeSvg(female48, size48)
//확인 요망 ***************
export const VideoPlay48 = makeSvg(videoPlay48, size48)
export const ImageList48 = makeSvg(imageList48, size48)
export const Cancel48 = makeSvg(cancel48, size48)
//*********************/
export const Bracket48 = makeSvg(bracket48, size48)
export const Star50Border = makeSvg(starBorder, size50)
export const Star50Filled = makeSvg(starFilled, size50)
export const Meatball50h_GRAY20 = makeSvg(meatball50h, size50, GRAY20)
export const Meatball50h_APRI10 = makeSvg(meatball50h, size50, APRI10)
export const Meatball50v_GRAY20 = makeSvg(meatball50v, size50, GRAY20)
export const Meatball50v_APRI10 = makeSvg(meatball50v, size50, APRI10)
export const Hash50 = makeSvg(hash50, size50)
export const Rect50Border = makeSvg(rectBorder, size50)
export const Check50 = makeSvg(check, size50)
export const Heart52Border = makeSvg(heartBorder, size52, APRI10)
export const Heart52 = makeSvg(heart52, size52)
export const Eye52_APRI10 = makeSvg(eye52_apri10, size52, APRI10)
export const Eye52_GRAY20 = makeSvg(eye52_gray20, size52, GRAY20)
export const Cross52 = makeSvg(cross, size52)
export const Location54_APRI10 = makeSvg(location54_apri10, size54)
export const Location54_GRAY30 = makeSvg(location54_gray30, size54)
export const Camera54 = makeSvg(camera54, size54)
export const PawBorder54 = makeSvg(pawBorder54, size54)
export const Location54Filled = makeSvg(location54Filled, size54)
export const SirenRed58 = makeSvg(sirenRed58, size58)
export const SirenWhite58 = makeSvg(sirenWhite58, size58)
export const Star60Border = makeSvg(starBorder, size60)
export const Star60Filled = makeSvg(starFilled, size60)
export const Photo60 = makeSvg(photo60, size60)
export const Send60 = makeSvg(send60, size60)
export const Send60Big = makeSvg(send60Big, size60)
export const Lock60Border = makeSvg(lock60Border, size60)
export const Lock60Filled = makeSvg(lock60Filled, size60)
export const Dog62 = makeSvg(dog62, size62)
export const Cat62 = makeSvg(cat62, size62)
export const Rabbit62 = makeSvg(rabbit62, size62)
export const Paw62_APRI10 = makeSvg(paw62, size62, APRI10)
export const Paw62_YELL20 = makeSvg(paw62, size62, YELL20)
export const Paw62_Mixed = makeSvg(paw62_mixed, size62)
export const Cancel62 = makeSvg(cancel62, size62)
export const Private62 = makeSvg(private62,size62)
export const Public62 = makeSvg(public62, size62)
export const AddItem64 = makeSvg(addItem64, size64)
export const Tag70 = makeSvg(tag70, size70)
export const Social_kakao72 = makeSvg(social_kakao72, size72)
export const Clip72 = makeSvg(clip72, size72)
export const Email72 = makeSvg(email72, size72)
export const FlashOff72 = makeSvg(flashOff72, size72)
export const Rotate72 = makeSvg(rotate72, size72)
export const FlashOn72 = makeSvg(flashOn72, size72)
export const AddItem92 = makeSvg(addItem92, size92)
export const Write94 = makeSvg(write94, size94)
export const FloatAddPet_126x92 = makeSvg(floatAddPet_126x92, size126x92)
export const FloatAddArticle_126x92 = makeSvg(floatAddArticle126x92, size126x92)
export const FeedTabBorder = makeSvg(feedTabBorder, {width:66 *DP, height:48 * DP})
export const AnimalSavingTabBorder = makeSvg(animalSavingTabBorder, { width:54 * DP, height:46})
export const CommunityTabBorder = makeSvg(communityTabBorder, {width:54 *DP, height:48 *DP})
export const MyTabBorder = makeSvg(myTabBorder, {width:50*DP, height:48*DP})
export const FeedTabFilled = makeSvg(feedTabFilled, {width:66 * DP, height:48 *DP})
export const AnimalSavingTabFilled = makeSvg(animalSavingTabFilled, {width:54 * DP, height:46*DP})
export const CommunityTabFilled = makeSvg(communityTabFilled, {width:54*DP, height:48*DP})
export const MyTabFilled = makeSvg(myTabFilled, {width:50*DP, height:48*DP})

// Added for molecules
export const Paw94x90 = makeSvg(paw94x90, {width:94*DP, height:90*DP})
export const CameraLinkIcon = makeSvg(cameraLink, {width:86*DP, height:70*DP})
export const HashLabel46 = makeSvg(hashLabel, size46)
export const HashLabel94 = makeSvg(hashLabel, size94)
export const HashLabel76 = makeSvg(hashLabel, size76)
export const HashLabel70 = makeSvg(hashLabel, size70)
export const HashLabel60 = makeSvg(hashLabel, size60)
export const Tag_View = makeSvg(tagView, {width:110*DP, height:52*DP})
export const Tag_Edit = makeSvg(tagEdit, {width:170*DP, height:52*DP})
export const X_Mark = makeSvg(xMark, size48)
export const Add_Pet = makeSvg(addPet180, {width:180*DP, height:180*DP})
export const Urgent_Write1 = makeSvg(urgent_write1, size110)
export const Urgent_Write2 = makeSvg(urgent_write2, size110)
export const Leaflet = makeSvg(leaflet, {width:118*DP, height:110*DP})
export const Arrow_Down_White = makeSvg(arrow_down, size48, 'white')
export const Arrow_Down_APRI10 = makeSvg(arrow_down, size48, APRI10)
export const Arrow_Down_GRAY30 = makeSvg(arrow_down, size48, GRAY30)
export const Arrow_Down_GRAY10 = makeSvg(arrow_down, size48, GRAY10)
export const Arrow_Up_APRI10 = makeSvg(arrow_up, size48, APRI10)
export const Arrow_Up_GRAY30 = makeSvg(arrow_up, size48, GRAY30)
export const Arrow_Up_GRAY10 = makeSvg(arrow_up, size48, GRAY10)
export const Arrow_Up_White = makeSvg(arrow_up, size48, 'white')



