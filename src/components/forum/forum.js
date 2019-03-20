import React , {Component} from 'react';
import './forum.css';

class Forum extends Component{
    render() {
        return(
            <div>   
                <table class = "forum forum--style">
                    <col width="50%"/>
                    <col width="16%"/>
                    <col width = "16%"/>
                    <tr class = "forum__first-row forum__first-row--style">
                        <th>Вопрос</th>
                        <th>Ответов</th>
                        <th>Дата</th>
                        <th>Автор</th>
                    </tr>
                    <tr class = "simple-row forum__simple-row simple-row--style">
                        <th class = "forum__question"><a href="">Не знаю как приготовить самcу</a></th>
                        <th>103</th>
                        <th>23.03.2019</th>
                        <th><a href="">Maga</a></th>
                    </tr>
                    <tr class = "simple-row forum__simple-row simple-row--style">
                        <th class = "forum__question"><a href="">Не знаю как приготовить самcу</a></th>
                        <th>103</th>
                        <th>23.03.2019</th>
                        <th><a href="">Maga</a></th>
                    </tr>
                    <tr class = "simple-row forum__simple-row simple-row--style">
                        <th class = "forum__question"><a href="">Не знаю как приготовить самcу</a></th>
                        <th>103</th>
                        <th>23.03.2019</th>
                        <th><a href="">Maga</a></th>
                    </tr>
                    <tr class = "simple-row forum__simple-row simple-row--style">
                        <th class = "forum__question"><a href="">Не знаю как приготовить самcу</a></th>
                        <th>103</th>
                        <th>23.03.2019</th>
                        <th><a href="">Maga</a></th>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Forum;