import React, { Component } from "react";
import Article from "./Article";

class App extends Component {
    render() {
        const title  = <h1 align = "center">The Statue of Liberty's torch heads to new museum</h1>
        const author = <h4 align="center">Kate Farley</h4>
        const date = <h6 align="center">November 22, 2018</h6>
        const children = [
                    <p>
                        <p>&emsp;The Statue of Liberty's original torch is getting a new home.
                    Made of copper and gold so that it would shine bright, the first torch took a beating from the weather and was replaced by a replica in 1984. It's been stored in the statue's pedestal ever since.
                    But visitors will be able to see the original 3,600-pound torch in all its glory at a new Statue of Liberty Museum, which will open on Liberty Island in May 2019. The torch was transported there by truck last week, along with a replica model of Lady Liberty's face.
                        <em>"Although it is not one of the most difficult things we have ever moved,"</em> says Douglas Phelps, who oversaw the relocation of the torch, <em>"it is certainly the most important."</em><br/>
                        </p>
                        <p>
                        <br/>&emsp;Not only is the Statue of Liberty the symbol of New York City, she is also a UNESCO World Heritage site under the designation of "Outstanding Universal Value." Her full name is Liberty Enlightening the World, and she was designed by Frederic Auguste Bartholdi and built by Gustave Eiffel -- yes, the same guy who built Paris's Eiffel Tower.
                        Lady Liberty was a gift from France to the United States to celebrate the centennial of their nation's independence -- although, somewhat awkwardly, she arrived a decade too late.
                        <br/><br/>&emsp;Nevertheless, President Grover Cleveland formally unveiled her in 1886.
                        </p>
                        Since then, the statue has served as a symbol of hope and possibility for many people who entered the United States as immigrants via neighboring Ellis Island.
                        <em>"The original torch is a beautiful object of art and exemplifies the American ideals of freedom and democracy,"</em> says John Piltzecker,
                        superintendent of the Statue of Liberty National Monument. That symbolic spirit was bolstered by the decision to inscribe Emma Lazarus' poem <em>"The New Colossus"</em> on the statue's pedestal, which gave Lady Liberty one of her nicknames, <em>"Mother of Exiles."</em>
                        The most famous lines in the poem are: <br/><br/><b><em><div align="center">"Give me your tired, your poor / Your huddled masses yearning to breathe free."</div></em></b><br/><br/>
                         </p>
                        <p>&emsp;In 2017, nearly 4.5 million people visited Liberty Island. When completed, the Statue of Liberty Museum will be 26,000 square feet of history, inspiration and deeper analysis of the statue's symbolism both in the US and around the world.
                    The "inspiration gallery," which is where the torch will live, will have floor-to-ceiling glass windows looking out at Lower Manhattan, including the World Trade Center.
                        </p>
                    </p>
        ]
        return (
            <div className="AppOld">
                <Article title = {title} date = {date} author = {author}>{children}</Article>
            </div>
        )
    }

}

export default AppOld;