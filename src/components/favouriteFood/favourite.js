import React, { Component } from 'react';
import './favourite.css';

import lagman from '../../images/lagman.jpg'
import shashlyk from '../../images/шашлык.jpg'
import plov from '../../images/plov.jpg'
import star from '../../images/star.png'
class Favourite extends Component {
    render() {
        return (
        <div>
            <div class = "food_block_grey">
            <div class="row">
            <div class="col-lg-3">
            <img class ="food_image" src={shashlyk}/>
            </div>
            <div class="col-lg-9">
            
            <h3 class="name_food"> <img class ="star" src={star}/>Шашлык</h3>
            <p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam.Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at </p> 
            <p class="ingredients"> <b>Состав:</b> баранина, баклажан, масло растительное, перец чёрный молотый, соль, зелень, овощи </p>
            </div>
            </div>
        </div>
        <div class = "food_block_grey">
            <div class="row">
            <div class="line">
            <img class ="food_image" src={plov}/>
            <h3 class="name_food"><img class ="star" src={star}/>Плов</h3>
            </div>
            <p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam.Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at </p> 
                <p class="ingredients"> <b>Состав:</b> говядина, баранина, рис, лук репчатый, морковь, чеснок, масло растительное</p>
            </div>
            </div>
        <div class = "food_block_grey">
            <div class="row">
            <div class="col-lg-3">
            <img class ="food_image" src={lagman}/>
            </div>
            <div class="col-lg-9">
            <h3 class="name_food"><img class ="star" src={star}/>Лагман</h3>
            <p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam.Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at </p> 
            <p class="ingredients"> <b>Состав:</b> говядина, масло растительное, картофель, лук репчатый, чеснок, перец болгарский, морковь, редька, томат-пюре, помидоры, специи, соль, бульон, мука пшеничная, яйца.</p>
                    </div>
            </div>
         </div>
        </div>
        );
    }
}
export default Favourite;
