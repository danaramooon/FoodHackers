import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import SideBar from '../sidebar/sidebar'
import lagman from '../../images/lagman.jpg'
import shashlyk from '../../images/шашлык.jpg'
import plov from '../../images/plov.jpg'
import './foodblock.css';

class FoodBlock extends Component {
    render() {
        return (
			<div class = "container">
			<SideBar/>
            <div class = "food_block_container">

				<div class = "food_block">
					<div class="row">
						<img src={shashlyk} class = "food_img "/>
						<div class="text">
							<h3 class="name_food">Шашлык</h3>
							<p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam.Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at </p> 
							<p class="ingredients"> 
								<b>Состав:</b> 
								баранина, баклажан, масло растительное, перец чёрный молотый, соль, зелень, овощи
							</p>
						</div>
					</div>
				</div>
				<div class = "food_block">
					<div class="row">
						<img src={lagman} class = "food_img "/>
						<div class="text">
							<h3 class="name_food">Лагман</h3>
							<p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae.Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae.Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore.Modi velit odio nam nulla unde amet odit pariatur at </p> 
							<p class="ingredients"> 
								<b>Состав:</b> 
								говядина, масло растительное, картофель, лук репчатый, чеснок, перец болгарский, морковь, редька, томат-пюре, помидоры, специи, соль, бульон, мука пшеничная, яйца.	</p>
						</div>
					</div>
				</div>
				<div class = "food_block">
					<div class="row">
						<img src={plov} class = "food_img "/>
						<div class="text">
							<h3 class="name_food">Плов</h3>
							<p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam.Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at </p> 
							<p class="ingredients"> 
								<b>Состав:</b> 
								говядина, баранина, рис, лук репчатый, морковь, чеснок, масло растительное						</p>
						</div>
					</div>
				</div>
			
				<div class = "food_block">
						<div class="row">
							<img src={shashlyk} class = "food_img "/>
							<div class="text">
								<h3 class="name_food">Шашлык</h3>
								<p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam.Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at </p> 
								<p class="ingredients"> 
									<b>Состав:</b> 
									баранина, баклажан, масло растительное, перец чёрный молотый, соль, зелень, овощи						</p>
							</div>
						</div>
					</div>
				<div class = "food_block">
						<div class="row">
							<img src={plov} class = "food_img "/>
							<div class="text">
								<h3 class="name_food">Плов</h3>
								<p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam.Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at </p> 
								<p class="ingredients"> 
									<b>Состав:</b> 
									говядина, баранина, рис, лук репчатый, морковь, чеснок, масло растительное
								</p>
						</div>
					</div>
				</div>
			</div>
			</div>
        );
    }
}
export default FoodBlock;