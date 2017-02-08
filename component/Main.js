
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    NavigatorIOS,
} from 'react-native';

//引入组件
var Home = require("./Home");
var Message = require("./Message");
var Find = require("./Find");
var Mine = require("./Mine");

var Main = React.createClass({
    getInitialState:function () {
        return{
            selectedTabBarItem:'第一页'
        };


    },


   render:function () {
       return (
        <TabBarIOS
        tintColor="orange" //主体颜色
            barTintColor="black"
        >
            {/*首页*/}
            <TabBarIOS.Item
                icon={require("./../images/tabbar_home@2x.png")}
                title="首页"
                selected={this.state.selectedTabBarItem == '第一页'}//当这个属性为真的时候切换到这个选项卡对应的页面
                onPress={()=>{this.setState({
                    selectedTabBarItem:'第一页'
                })}}
            >
                <NavigatorIOS
                    tintColor="orange"
                    //barTintColor="pink"
                    style={{flex:1}}
                    initialRoute={{
                        component:Home,//需要控制的那个板块
                        title:"主页",
                        leftButtonIcon:require("./../images/navigationbar_friendattention@2x.png"),
                        rightButtonIcon:require("./../images/navigationbar_pop@2x.png")
                    }}
                />



            </TabBarIOS.Item>
            <TabBarIOS.Item
                icon={require("./../images/tabbar_message_center@2x.png")}
                title="消息"
                selected={this.state.selectedTabBarItem == '第二页'}//当这个属性为真的时候切换到这个选项卡对应的页面
                onPress={()=>{this.setState({
                    selectedTabBarItem:'第二页'
                })}}
            >
                <NavigatorIOS
                    style={{flex:1}}
                    initialRoute={{
                        component:Message,//需要控制的那个板块
                        title:"消息",

                    }}
                />

            </TabBarIOS.Item>
            <TabBarIOS.Item
                icon={require("./../images/tabbar_discover@2x.png")}
                title="发现"
                selected={this.state.selectedTabBarItem == '第三页'}//当这个属性为真的时候切换到这个选项卡对应的页面
                onPress={()=>{this.setState({
                    selectedTabBarItem:'第三页'
                })}}
            >
                <NavigatorIOS
                    style={{flex:1}}
                    initialRoute={{
                        component:Find,//需要控制的那个板块
                        title:"发现",

                    }}
                />


            </TabBarIOS.Item>
            <TabBarIOS.Item
                icon={require("./../images/tabbar_profile@2x.png")}
                title="我的"
                selected={this.state.selectedTabBarItem == '第四页'}//当这个属性为真的时候切换到这个选项卡对应的页面
                onPress={()=>{this.setState({
                    selectedTabBarItem:'第四页'
                })}}
            >
                <NavigatorIOS
                    style={{flex:1}}
                    initialRoute={{
                        component:Mine,//需要控制的那个板块
                        title:"我的",

                    }}
                />


            </TabBarIOS.Item>
        </TabBarIOS>
       );
   }
});




const styles = StyleSheet.create({

});

//输出类
module.exports = Main;
