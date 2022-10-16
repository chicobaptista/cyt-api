import chai, { expect } from 'chai'
import chaiHttp = require('chai-http')
import app from '../../src'
import chaiAsPromised from 'chai-as-promised'

chai.use(chaiHttp)
chai.use(chaiAsPromised)

describe("Cortex's Yearly Themes API", () => {
    const testStartTime = new Date()
    let themeId: string
    let themeCreatedAt: Date
    let themeUpdatedAt: Date
    describe('Create a new theme', () => {
        describe('on invalid props', () => {
            it('should return an error', async () => {
                const badRequest = {}

                const res = await chai
                    .request(app)
                    .post('/themes')
                    .send(badRequest)

                expect(res.status).to.equal(500)
            })
        })
        xdescribe('on valid props', () => {
            it('should return a new Theme', async () => {
                const {
                    body: {
                        id,
                        name,
                        description,
                        outcomes,
                        createdAt,
                        updatedAt,
                    },
                    status,
                } = await chai
                    .request(app)
                    .post('/themes')
                    .send({
                        name: 'New Theme',
                        description: 'My fancy new theme',
                        outcomes: ['I wanna make a new cyt app!'],
                    })
                themeId = id
                themeCreatedAt = createdAt
                themeUpdatedAt = updatedAt

                expect(status).to.equal(201, 'status should be CREATED')
                expect(name).to.equal('New Theme')
                expect(description).to.equal('My fancy new theme')
                expect(outcomes).to.deep.equal(['I wanna make a new cyt app!'])
                expect(new Date(createdAt)).to.be.greaterThan(testStartTime)
                expect(updatedAt).to.deep.equal(createdAt)
            })
        })
    })
    xdescribe('Read the newly created Theme', () => {
        it('should return the created Theme', async () => {
            const {
                body: { id, name, description, outcomes, createdAt, updatedAt },
                status,
            } = await chai.request(app).get(`/themes/${themeId}`).send()

            expect(status).to.equal(200, 'status should be OK')
            expect(id).to.equal(themeId)
            expect(name).to.equal('New Theme')
            expect(description).to.equal('My fancy new theme')
            expect(outcomes).to.deep.equal(['I wanna make a new cyt app!'])
            expect(createdAt).to.deep.equal(themeCreatedAt)
            expect(updatedAt).to.deep.equal(themeUpdatedAt)
        })
    })
    describe('Read an non-existent Theme', () => {
        it('should return an error', async () => {
            const res = await chai.request(app).get(`/themes/${null}`)

            expect(res.status).to.equal(500)
        })
    })

    xdescribe('Update the created theme', () => {
        it('should update the same Theme', async () => {
            const {
                body: { id, name, description, outcomes, createdAt, updatedAt },
                status,
            } = await chai
                .request(app)
                .patch(`/themes/${themeId}`)
                .send({
                    outcomes: [
                        'I wanna make a new cyt app!',
                        'I also want to make a Million, nay, a BILLION bucks!',
                    ],
                })
            themeUpdatedAt = updatedAt

            expect(status).to.equal(200, 'status should be OK')
            expect(id).to.equal(themeId)
            expect(name).to.equal('New Theme')
            expect(description).to.equal('My fancy new theme')
            expect(outcomes).to.deep.equal([
                'I wanna make a new cyt app!',
                'I also want to make a Million, nay, a BILLION bucks!',
            ])
            expect(createdAt).to.deep.equal(themeCreatedAt)
            expect(new Date(updatedAt)).to.be.greaterThan(new Date(createdAt))
        })
    })

    xdescribe('Read the updated Theme', () => {
        it('should return the updated Theme', async () => {
            const {
                body: { id, name, description, outcomes, createdAt, updatedAt },
                status,
            } = await chai.request(app).get(`/themes/${themeId}`).send()

            expect(status).to.equal(200, 'status should be OK')
            expect(id).to.equal(themeId)
            expect(name).to.equal('New Theme')
            expect(description).to.equal('My fancy new theme')
            expect(outcomes).to.deep.equal([
                'I wanna make a new cyt app!',
                'I also want to make a Million, nay, a BILLION bucks!',
            ])
            expect(createdAt).to.deep.equal(themeCreatedAt)
            expect(updatedAt).to.deep.equal(themeUpdatedAt)
        })
    })
})
