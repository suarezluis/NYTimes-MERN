import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import Article from "../../components/Article";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List } from "../../components/List";
import "./saved.css";


class Saved extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.getSavedArticles();
  }

  getSavedArticles = () => {
    API.getSavedArticles()
      .then(res =>
        this.setState({
          articles: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleArticleDelete = id => {
    API.deleteArticle(id).then(res => this.getSavedArticles());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>New York Times Article Scrubber (React.JS) </strong>
              </h1>
              <h2 className="text-center">
                Search and save articles from the New York Times.
              </h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Articles" >
              {this.state.articles.length ? (
                <List>
                  {this.state.articles.map(article => (
                    <Article
                      key={article._id}
                      _id={article._id}
                      title={article.title}
                      url={article.url}
                      date={article.date}
                      handleClick={this.handleArticleDelete}
                      buttonText="Delete"
                      saved
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">There is no Saved Articles</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Saved;
