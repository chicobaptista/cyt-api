import chai, { expect } from 'chai'
import {
    makeMockUpdateThemeRepository,
    makeMockUpdateThemeRepositoryWithNoRead,
} from '@theme/repositories/theme.repository.utils.spec'
import { CUpdateTheme } from './update-theme'
import { ThemeDTO } from '@theme/entities/theme.interface'
import { UpdateTheme } from './use-cases.interface'
import { UpdateThemeRepository } from '@theme/repositories/theme.repository.interface'
import chaiAsPromised from 'chai-as-promised'
import { generateMockThemeDto } from '@theme/entities/theme.utils.spec'
chai.use(chaiAsPromised)

describe('Update Theme Use Case', () => {
    describe('Update theme', () => {
        describe('on non-existing theme in repository', () => {
            it('should call read and not call update on repository', async () => {
                const updateRepo: UpdateThemeRepository =
                    makeMockUpdateThemeRepositoryWithNoRead()
                const originalThemeDto = generateMockThemeDto()
                const changes: Partial<ThemeDTO> = {
                    name: 'New Theme Name',
                    outcomes: ['New Outcome 1'],
                }
                const updateTheme: UpdateTheme = new CUpdateTheme(updateRepo)

                expect(
                    updateTheme.update(originalThemeDto.id, changes),
                ).to.be.rejectedWith(`Theme ${originalThemeDto.id} not found`)

                expect(updateRepo.readTheme).to.have.been.calledWith(
                    originalThemeDto.id,
                )
                expect(updateRepo.updateTheme).to.not.have.been.called
            })
        })

        describe('on existing theme in repository', () => {
            it('should call read and update method on repository', async () => {
                const updateRepo: UpdateThemeRepository =
                    makeMockUpdateThemeRepository()
                const originalThemeDto = generateMockThemeDto()
                const changes: Partial<ThemeDTO> = {
                    name: 'New Theme Name',
                    outcomes: ['New Outcome 1'],
                }
                const updateTheme: UpdateTheme = new CUpdateTheme(updateRepo)

                await updateTheme.update(originalThemeDto.id, changes)
                expect(updateRepo.readTheme).to.have.been.calledWith(
                    originalThemeDto.id,
                )
                expect(updateRepo.updateTheme).to.have.been.calledWithMatch(
                    changes,
                )
            })

            it('should return a theme dto', async () => {
                const updateRepo: UpdateThemeRepository =
                    makeMockUpdateThemeRepository()
                const originalThemeDto = generateMockThemeDto()
                const changes: Partial<ThemeDTO> = {
                    name: 'New Theme Name',
                    outcomes: ['New Outcome 1'],
                }
                const updateTheme: UpdateTheme = new CUpdateTheme(updateRepo)
                setTimeout(async () => {
                    const updateResult: ThemeDTO = await updateTheme.update(
                        originalThemeDto.id,
                        changes,
                    )

                    expect(
                        updateResult,
                        'should have all old and updated props',
                    ).to.deep.contain({
                        ...originalThemeDto,
                        ...changes,
                    })
                    expect(
                        updateResult,
                        'should have createdAt property',
                    ).to.haveOwnProperty('createdAt')
                    expect(
                        updateResult,
                        'should have updatedAt property',
                    ).to.haveOwnProperty('updatedAt')
                    expect(
                        updateResult,
                        'should have id property',
                    ).to.haveOwnProperty('id')
                    expect(
                        updateResult.updatedAt,
                        'should have a createdAt earlier than updatedAt',
                    ).to.be.greaterThan(updateResult.createdAt)
                }, 200)
            })
        })
    })
})
