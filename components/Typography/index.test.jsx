import React from 'react'
import renderer from 'react-test-renderer'
import Typography from '.'

describe('Typography', () => {
  test('Renders correctly', () => {
    const component = renderer.create(<Typography />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('H1', () => {
    const component = renderer.create(
      <Typography variant="H1">Hello World</Typography>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('H2', () => {
    const component = renderer.create(
      <Typography variant="H2">Hello World</Typography>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('H3', () => {
    const component = renderer.create(
      <Typography variant="H3">Hello World</Typography>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('H4', () => {
    const component = renderer.create(
      <Typography variant="H4">Hello World</Typography>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('H5', () => {
    const component = renderer.create(
      <Typography variant="H5">Hello World</Typography>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('H6', () => {
    const component = renderer.create(
      <Typography variant="H6">Hello World</Typography>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
