import React from 'react'

import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import * as DevActions from '../store/actions/devs'

const DevList = ({ list, removeDev }) => (
  <div className="absolute h-full w-96 p-10">
    <ul className="rounded h-full w-full list-reset bg-white overflow-hidden shadow">
      {list.length > 0 ? (
        list.map(item => (
          <li
            key={item.id}
            className="flex items-center justify-between bg-grey-lighter p-4 mb-px"
          >
            <div className="flex items-center">
              <img
                src={item.avatar_url}
                height={48}
                width={48}
                className="rounded-full h-full"
                alt={item.name}
              />
              <div className="flex flex-col ml-2">
                <strong>{item.name || item.login}</strong>
                <a
                  href={`https://github.com/${item.login}`}
                  className="flex no-underline items-center mt-1 text-grey-darker hover:text-rocketseat"
                >
                  <i className="fab fa-github" />
                  <small className="ml-1">{item.login}</small>
                </a>
              </div>
            </div>
            <button
              onClick={() => removeDev(item.id)}
              className="rounded-full flex items-center justify-center bg-red-light text-white h-6 w-6"
            >
              <i className="fas fa-times" />
            </button>
          </li>
        ))
      ) : (
        <div className="text-grey-darker p-6 text-center h-full flex flex-col items-center justify-center">
          <i className="fab fa-github fa-5x" />
          <h1 className="py-4">Oops...</h1>
          <p>Parece que você não adicionou ninguém ainda.</p>
          <strong className="pt-4">Clique no mapa para começar</strong>
        </div>
      )}
    </ul>
  </div>
)

const mapStateToProps = state => ({
  list: state.devs.list
})

const mapDispatchToProps = dispatch => bindActionCreators(DevActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DevList)
