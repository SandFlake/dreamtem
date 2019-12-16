import React from 'react';

class SavedRecipesForLater extends React.Component {

    constructor(props) {
        super(props)
    }

    handleDelete = () => {
        this.props.handleDeleteRecipe(this.props.readLater)
    };

    render() {

        return (

            <div className="readLaterArticleItem">
                <a href={this.props.readLater.uri}>
                    {this.props.readLater.label}
                </a>

                <button className="btn-danger btn-space" onClick={(e => this.handleDelete())}>
                    Delete Me!
                </button>

            </div>
        )
    }
}

export default SavedRecipesForLater;