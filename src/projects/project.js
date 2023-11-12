import React, { Fragment } from 'react';

export default function Project(props) {
    let project = props.project
    let repoUrl = `https://www.github.com/daivikhrajesh/${project.repoName}`
    return (
        <Fragment>
            
                        <div  className="max-w-sm rounded overflow-hidden shadow-lg">
                            <div className="px-6 py-4">
                                <div className="font-semibold text-xl mb-2"><a href={repoUrl} target="_blank" rel="noopener noreferrer">{project.repoName}</a></div>
                                <p className="text-gray-700 text-base">
                                    {project.description}
                                </p>
                                    <a className="font-bold hover:no-underline" target="_blank" rel="noopener noreferrer" href={project.liveUrl}>{project.liveUrl}</a>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                {project.hashTags.map(hashTag => {
                                    return(
                                    <span key={hashTag}className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{hashTag}</span>
                                    )
                                })}
                            </div>
                        </div>
                   
        </Fragment>
    )
}