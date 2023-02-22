import styled from 'styled-components'

interface Props {
  open?: boolean
}

export const Container = styled.div`
  grid-area: navbar;
  color: rgb(97, 84, 127);
  background-color: rgba(210, 191, 237, 0.18);
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Left = styled.div``

export const IconWrapper = styled.span<Props>`
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  margin-left: 10px;
  margin-right: 5px;
  position: relative;
`

export const Right = styled.div``
