import React, {Component} from 'react'
import Card from '../components/baseComponents/card'
import {BE_BETTER, 
        BE_SMARTER, 
        BE_FASTER, 
        BE_STRONGER,
        CARD_TEXT} from './constants/cardconstants/cardconstants'


export default class SubscribeView extends Component {
    render() {
        return (
            <div className="py-5" id="subscribeSection boxes">
                <div className="container">
                    <div className="row">
                        <Card
                            Title={BE_BETTER}
                            subTitle={CARD_TEXT}
                        />
                        <Card
                            Title={BE_SMARTER}
                            subTitle={CARD_TEXT}
                            dark={true}
                            TitleText={true}
                         />
                        <Card
                            Title={BE_FASTER}
                            subTitle={CARD_TEXT}
                       />
                        <Card
                            Title={BE_STRONGER}
                            subTitle={CARD_TEXT}
                            dark={true}
                            TitleText={true}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

