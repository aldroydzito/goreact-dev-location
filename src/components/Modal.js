import React, { Component } from 'react'

import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import * as DevActions from '../store/actions/devs'
import * as ModalActions from '../store/actions/modal'

class Modal extends Component {
  handleAddUser = async () => {
    this.props.addDevRequest(this.refs.user.value)
  }

  render () {
    const { visible, closeModal } = this.props
    return (
      visible && (
        <div
          className="absolute h-full w-full flex items-center justify-center"
          style={{ background: 'rgba(98, 78, 165, .65)' }}
        >
          <div className="rounded flex flex-col items-center p-4 bg-white w-64 shadow-lg">
            <h3>Adicionar usuário</h3>
            <input
              autoFocus
              onKeyUp={key =>
                key.keyCode === 13 ? this.handleAddUser() : null
              }
              ref="user"
              className="rounded border w-full py-2 px-4 mt-4"
              placeholder="Usuário no Github"
            />
            <div className="w-full flex justify-around mt-4">
              <button
                onClick={() => closeModal()}
                className="rounded bg-red-light text-white p-2 px-4"
              >
                Cancelar
              </button>
              <button
                onClick={this.handleAddUser}
                className="rounded bg-green-light text-white p-2 px-4"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )
    )
  }
}

const mapStateToProps = state => ({
  visible: state.modal.visible
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...DevActions, ...ModalActions }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
