import React from 'react'
import { Flex, WingBlank, Drawer,List } from 'antd-mobile'

import CustomIcon from '../../components/CustomIcon'
import CarouselComponent from './Carousel'
import Category from '../Category'

import { inject } from 'mobx-react';

import './index.less'

const menus=[
	{
		title: '关于我',
		iconUrl: 'https://geekjc-img.geekjc.com/about_me.png',
	},
]
@inject('testObj')
class Index extends React.Component{
	constructor(props){
		super(props)
		this.state={
			open: false
		}
	}
	renderCarousel = () => {

	}
	onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  }
	render(){
		const sidebar = (<List>
      {menus.map((val, index) => {
        return (<List.Item key={index}
          thumb={val.iconUrl}
        >{val.title}</List.Item>);
      })}
    </List>);
		return(
		  <div className="indexContainer">
			 <div className="header">
					<WingBlank size='md'>
						<Flex justify={'center'}>
							<Flex.Item>
								<img src="https://geekjc-img.geekjc.com/logo-rn.png" alt="logo.png" className="logo" />
							</Flex.Item>
							{/* <Flex.Item style={{flex:3}}>
								<SearchBar placeholder="请输入搜索关键词" />
							</Flex.Item> */}
							<Flex.Item style={{flex:8}}>
								<h1>极客教程</h1>
							</Flex.Item>
							<Flex.Item>
								<CustomIcon type={require('../../svg/menu.svg')} size='md' onClick={this.onOpenChange} />
							</Flex.Item>
						</Flex>
					</WingBlank>
				</div>
				<Drawer
					className="my-drawer"
					style={{ minHeight: document.documentElement.clientHeight }}
					enableDragHandle
					position="right"
					touch={false}
					contentStyle={{ color: '#A6A6A6', textAlign: 'center' }}
					sidebar={sidebar}
					open={this.state.open}
					onOpenChange={this.onOpenChange}
				>
					<WingBlank size='md'>
						<CarouselComponent />
					</WingBlank>
					<WingBlank size='md'>
						<Category />
					</WingBlank>
				</Drawer>
		  </div>
		)
	}
}

export default Index
