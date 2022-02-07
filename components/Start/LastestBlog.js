import styled from "styled-components"
import fetch from 'isomorphic-unfetch'

import Image from 'next/image'

/* const LatestBlogPosts = () => {
    return(
        <PostWrapper>
            <PostItem>
                <h3>Post 1</h3>
                <Image
                    src="/images/empty-post.jpg"
                    alt="Default image"
                    layout="fill"
                    objectFit="cover"
                />

            </PostItem>
            <PostItem>
                <h3>Post 2</h3>
            </PostItem>
            <PostItem>
                <h3>Post 3</h3>
            </PostItem>

        </PostWrapper>
        
    )
}
 */

const LatestBlogPosts = () => {
    return(
        <PostWrapper>
            <PostCard>
                <div className="title-content">
                    <h3>Rubrik 1</h3>
                    <hr />
                    <div className="intro">Det var en gång en liten katt som spann. MEEOW!</div>
                </div>
                <div className="card-info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. 
                </div>

                <div className="utility-info">
                    <ul className="utility-list">
                        <li className="comments">12</li>
                        <li className="date">3 Feb, 2022</li>
                    </ul>
                </div>
  
                <div className="gradient-overlay"></div>
                <div className="color-overlay"></div>
            </PostCard>

            <PostCard>
                <div className="title-content">
                    <h3>Rubrik 2</h3>
                    <hr />
                    <div className="intro">Det var en gång en liten katt som spann. MEEOW!</div>
                </div>
                <div className="card-info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. 
                </div>

                <div className="utility-info">
                    <ul className="utility-list">
                        <li className="comments">12</li>
                        <li className="date">3 Feb, 2022</li>
                    </ul>
                </div>
  
                <div className="gradient-overlay"></div>
                <div className="color-overlay"></div>
            </PostCard>

            <PostCard>
                <div className="title-content">
                    <h3>Rubrik 3</h3>
                    <hr />
                    <div className="intro">Det var en gång en liten katt som spann. MEEOW!</div>
                </div>
                <div className="card-info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. 
                </div>

                <div className="utility-info">
                    <ul className="utility-list">
                        <li className="comments">12</li>
                        <li className="date">3 Feb, 2022</li>
                    </ul>
                </div>
  
                <div className="gradient-overlay"></div>
                <div className="color-overlay"></div>
            </PostCard>
        </PostWrapper>
    )
}


export default LatestBlogPosts

export async function getServerSideProps() {
    const { API_URL } = process.env
  
    const res = await fetch(`${API_URL}/api/posts?populate=*`)
    const data = await res.json()
  
    return {
      props: {
        posts: data
      }
    }
  }

    const PostWrapper = styled.div`
        width: 100%;
        padding: 30px 0;
        display: flex;
        justify-content: space-around;
    `
    
    const PostCard = styled.div`
        width: 350px;
        height: 500px;
        position: relative;
        overflow: hidden;
        border-radius: 10px;
        box-shadow: 3px 3px 20px rgba(0, 0, 0, .5);
        text-align: center;

        background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1765/bg-blog-card.jpg) no-repeat;

        .color-overlay{
   
            background: rgba(84,104,110,0.4);
            width: 350px;
            height: 500px;
            position: absolute;
            z-index: 10;
            top: 0;
            left: 0;
            transition: background .3s cubic-bezier(.33,.66,.66,1);
        }
        
        .gradient-overlay{
            background-image: -webkit-linear-gradient(rgba(0,0,0,0.00) 0%, rgba(0,0,0,.6) 21%);
            background-image: -moz-linear-gradient(rgba(0,0,0,0.00) 0%, rgba(0,0,0,.6) 21%);
            background-image: -o-linear-gradient(rgba(0,0,0,0.00) 0%, rgba(0,0,0,.6) 21%);
            background-image: linear-gradient(rgba(0,0,0,0.00) 0%, rgba(0,0,0,.6) 21%);
            width: 350px;
            height: 500px;
            position: absolute;
            top: 350px;
            left: 0;
            z-index: 15;
        }

        &:hover{ 
            .card-info{
            opacity: 1;
            bottom: 120px;
            }
            .color-overlay{
            background: rgba(84,104,110,0.8);
            }
        }

        h3 {
            text-transform: uppercase;
            font-size: 20px;
            font-weight: 500;
            letter-spacing: 2px;
            color: #9CC9E3;
            margin-bottom: 0;
        }

        hr {
            width: 50px;
            height: 3px;
            margin: 20px auto;
            border: 0;
            background: #D0BB57;
        }

        .intro {
            width: 170px;
            margin: 0 auto;
            color: #DCE3E7;
            font-size: 13px;
            font-style: italic;
            line-height: 18px;
        }

        .card-info{
            width: 100%;
            position: absolute;
            bottom: 100px;
            margin: 60px auto;
            padding: 0 50px;
            color: #DCE3E7;
            font-style: 16px;
            line-height: 24px;
            z-index: 20;
            opacity: 0;
            transition: bottom .3s, opacity .3s cubic-bezier(.33,.66,.66,1);
        }

        .utility-info{
            position: absolute;
            bottom: 0px;
            left: 0;
            z-index: 20;
        }
        .utility-list{
        list-style-type: none;
        margin: 0 0 30px 20px;
        padding: 0;
        width: 100%;
  
            li{
                margin: 0 15px 0 0;
                padding: 0 0 0 22px;
                display: inline-block;
                color: #DCE3E7;
                font-family: 'Roboto', sans-serif;
    
                &.comments{
                background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1765/icon-chat.svg) no-repeat 0 .1em;
                }
                &.date{
                background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1765/icon-calendar.svg) no-repeat 0 .1em;
                }
            }
        }
    `