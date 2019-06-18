import React, {Component} from 'react';


class MovieForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      id: '',
      name: '',
      url: ""
    }

    this.handleAddMovieName = this.handleAddMovieName.bind(this);
    this.handleAddMovieUrl = this.handleAddMovieUrl.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAddMovieName(event){
    this.setState({name: event.target.value})
  }

  handleAddMovieUrl(event){
    this.setState({url: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    if(!this.state.name.trim() || !this.state.url.trim()){
      return;
    }
    this.props.handleMovieSubmit(this.state);
    this.setState({ name: "", url:""});
  }

  render(){
    return(
      <form onSubmit = {this.handleSubmit}>
      <input type = "text" placeholder = "film name" value = {this.state.name}
      onChange = {this.handleAddMovieName}/>
      <input type = "text" placeholder = "film url" value = {this.state.url}
      onChange = {this.handleAddMovieUrl}/>
      <input type = "submit" value="Add Film" />
      </form>
    );
  }
}
export default MovieForm;
