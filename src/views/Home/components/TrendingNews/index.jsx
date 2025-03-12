import React from "react";
import styled from "styled-components";
import Icon from "@/conponents/common/Icon";
import ProgressBar from "@/conponents/common/ProgressBar";
import ViewAll from "@/conponents/common/buttons/ViewAll";
import { TRENDING_NEWS } from "@/constants/fakeTrending";
import dayjs from "dayjs";

const TrendingNewsStyled = styled.div`
  .article-title {
    display: inline-block;
    margin-bottom: 17px;
  }
  .other-trending-list,
  .trending-list {
    display: flex;
    gap: 30px;
  }
  .trending-list {
    flex-direction: column;
    img {
      border-radius: 6px;
    }
    .trending-no1,
    .other-trending {
      display: flex;
      flex: 1;
      .trending-category {
        width: fit-content;
        padding: 4px 10px;
        border-radius: 3px;
        font-weight: 600;
        font-size: 13px;
        letter-spacing: 0.78px;
        text-transform: uppercase;
        color: #ffffff;
        background: #f4796c;
      }
      .trending-info {
        display: flex;
        flex-direction: column;
        gap: 15px;
        .trending-title {
          font-weight: 700;
          font-size: 28px;
          line-height: 36.4px;
          text-transform: capitalize;
        }
        .trending-writen-info {
          display: flex;
          gap: 15px;
          div {
            display: flex;
            align-items: center;
            gap: 5px;
            span {
              font-family: Inter;
              font-weight: 600;
              font-size: 13px;
              letter-spacing: 0.52px;
              text-transform: uppercase;
              color: #6d757f;
            }
          }
        }
      }
    }
    .trending-no1 {
      width: 100%;
      gap: 25px;
      .trending-description {
        font-family: Inter;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        text-transform: capitalize;
        color: #545e69;
      }
    }
    .other-trending {
      flex-direction: column;
      gap: 15px;
      position: relative;
      .trending-category {
        position: absolute;
        top: 20px;
        left: 20px;
      }
      .trending-info {
        .trending-title {
          font-weight: 700;
          font-size: 20px;
          line-height: 28px;
          text-transform: capitalize;
          color: #183354;
        }
      }
    }
  }
`;
function TrendingNews() {
  const top1Trending = TRENDING_NEWS?.[0];
  return (
    <TrendingNewsStyled>
      <div className="article-header">
        <span className="article-title">Trending News</span>
        <ViewAll />
      </div>
      <ProgressBar
        current={1}
        total={15}
      />
      <div className="trending-list mt-30">
        <div className="trending-no1">
          <img
            src={top1Trending?.imageUrl}
            alt={top1Trending?.title}
          />
          <div className="trending-info">
            <p className="trending-category">{top1Trending?.category}</p>
            <p className="trending-title">{top1Trending?.title}</p>
            <div className="trending-writen-info">
              <div className="author">
                <Icon
                  name="account"
                  color="#6d757f"
                />
                <span>BY</span>
                <span>{top1Trending?.author}</span>
              </div>
              <div className="create-time">
                <Icon
                  name="calendar"
                  color="#6d757f"
                />
                <span>
                  {dayjs(top1Trending?.createTime).format("DD MMMM, YYYY")}
                </span>
              </div>
              <div className="time-pass">
                <Icon
                  name="clock_revert"
                  color="#6d757f"
                />
              </div>
            </div>
            <p className="trending-description">{top1Trending?.description}</p>
            <ViewAll title="Read More" />
          </div>
        </div>
        <div className="other-trending-list">
          {TRENDING_NEWS?.slice(1)
            ?.splice(0, 3)
            ?.map((trending, index) => (
              <div
                key={`trending_${trending?.id}_${index}`}
                className="other-trending"
              >
                <img
                  src={trending?.imageUrl}
                  alt={trending?.title}
                />
                <p className="trending-category">{trending?.category}</p>
                <div className="trending-info">
                  <p className="trending-title">{trending?.title}</p>
                  <div className="trending-writen-info">
                    <div className="author">
                      <Icon
                        name="account"
                        color="#6d757f"
                      />
                      <span>BY</span>
                      <span>{trending?.author}</span>
                    </div>
                    <div className="create-time">
                      <Icon
                        name="calendar"
                        color="#6d757f"
                      />
                      <span>
                        {dayjs(trending?.createTime).format("DD MMMM, YYYY")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </TrendingNewsStyled>
  );
}

export default TrendingNews;
