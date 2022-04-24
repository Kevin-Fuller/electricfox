import React from 'react'
import './SalonServicesTabs.css';
import { useState } from 'react'
import SalonServiceTab from './SalonServiceTab/SalonServiceTab';

const SalonServicesTabs = () => {
    const [isActiveTab1, setActiveTab1] = useState(true);
    const [isActiveTab2, setActiveTab2] = useState(false);
    const [isActiveTab3, setActiveTab3] = useState(false);
    const [tabContent, settabContent] = useState(<p>test</p>);
    
    const DisableClasses = () => {
        setActiveTab1(false);
        setActiveTab2(false);
        setActiveTab3(false);
    };

    const hairList = [
        {title: `Women's Designer Cut`, desc: 'We pride ourselves on going above and beyond to learn the newest trends and techniques, and we only hire stylists and estheticians who share our belief in the value of lifelong education—for ourselves, and for our clients.', price: '$3'},
        {title: 'Hair & Scalp Therapy', desc: 'you can do stuff', price: '$3'},
        {title: `Men's Designer Cut`, desc: 'you can do stuff', price: '$3'},];

    
    const colorList = [
        {title: 'One Color', desc: 'you can do stuff', price: '$3'},
        {title: 'Two-Three Dimensional Color', desc: 'you can do stuff', price: '$3'},
        {title: 'Ombre | Balayage', desc: 'you can do stuff', price: '$3'},
        {title: 'High/Low-Lighting', desc: 'you can do stuff', price: '$3'},
        {title: `Men's Color Services 60+`, desc: 'you can do stuff', price: '$3'},
        {title: `5 Minute Natural Gray Blending 36+`, desc: 'you can do stuff', price: '$3'}];

    const otherList = [
        {title: 'Eyebrow Tint', desc: 'you can do stuff', price: '$3'},
        {title: `Face Treatments`, desc: 'you can do stuff', price: '$3'},
        {title: 'Cosmetic Rituals', desc: 'you can do stuff', price: '$3'},
        {title: 'Perfecting Plant Peel', desc: 'you can do stuff', price: '$3'},
        {title: 'Hair Removal | Face', desc: 'you can do stuff', price: '$3'},];

    function EnableClass(givenClass){
        DisableClasses();
        if(givenClass === '1') {
            setActiveTab1(true);
        }
        if(givenClass === '2') {
            setActiveTab2(true);
        }
        if(givenClass === '3') {
            setActiveTab3(true);
        }
    }

    

  return (
    <div className='salon__service__tab__wrapper'>
        <ul className='tab__tabs'>
            <li className={isActiveTab1 ? "salon_tab active" : "salon_tab"} onClick={() =>EnableClass('1')}>Hair Cuts</li>

            <li className={isActiveTab2 ? "salon_tab active" : "salon_tab"} onClick={() =>EnableClass('2')}>Color & Texturizing</li>

            <li className={isActiveTab3 ? "salon_tab active" : "salon_tab"} onClick={() =>EnableClass('3')}>Other</li>
        </ul>
        <div className='tab__content'>
            <ul className={isActiveTab1 ? "salon_content__tab active" : "salon_content__tab"}>
            {hairList.map((obj, i) => {
                return(<li key={i}>{SalonServiceTab(obj.title, obj.desc, 'https://media.istockphoto.com/photos/making-hairstory-everyday-with-gorgeous-hair-picture-id1055099140?k=20&m=1055099140&s=612x612&w=0&h=XhmNge5-6wiIlGb0ZwsSmPfLwrl0h2S_2UtmmJdFbdw=')}</li>)})
            }
            </ul>
            <ul className={isActiveTab2 ? "salon_content__tab active" : "salon_content__tab"}>
            {colorList.map((obj, i) => {
                return(<li key={i}>{SalonServiceTab(obj.title, obj.desc, 'imagetest')}</li>)})
            }
            </ul>
            <ul className={isActiveTab3 ? "salon_content__tab active" : "salon_content__tab"}>
            {otherList.map((obj, i) => {
                return(<li key={i}>{SalonServiceTab(obj.title, obj.desc, 'imagetest')}</li>)})
            }
            </ul>
        </div>
</div>
  )
}

export default SalonServicesTabs