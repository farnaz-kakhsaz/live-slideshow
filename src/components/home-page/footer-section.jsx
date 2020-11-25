import React from "react";
import PropTypes from "prop-types";
import GitInfo from "react-git-info/macro";
// Components
import LinkBase from "../items-base/link-base/link-base";
import BoxBase from "../items-base/box-base/box-base";
import StackOverflowIcon from "../icons/stack-overflow-icon/stack-overflow-icon.component";
import GitHubIcon from "../icons/git-hub-icon/git-hub-icon.component";
import LinkedIcon from "../icons/linked-in-icon/linked-in-icon.component";
// Constants
import { repository } from "../../../package.json";

export default function FooterSection({ classes }) {
  const gitInfo = GitInfo();

  return (
    <>
      <div className={classes.divider} />
      <BoxBase mt={5}>
        <StackOverflowIcon />
        <GitHubIcon />
        <LinkedIcon />
      </BoxBase>
      <BoxBase fontSize="caption.fontSize" mt={3}>
        This page was built and deployed from the commit:&nbsp;
        <LinkBase
          href={`${repository.url}/commit/${gitInfo.commit.hash}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {gitInfo.commit.shortHash}
        </LinkBase>
        &nbsp;and the tag version:&nbsp;
        <LinkBase
          href={`${repository.url}/releases/tag/${gitInfo.tags[0]}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {gitInfo.tags[0]}
        </LinkBase>
        <br />
        You can fork this repository on&nbsp;
        <LinkBase
          href={repository.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </LinkBase>
      </BoxBase>
    </>
  );
}

FooterSection.propTypes = {
  classes: PropTypes.object.isRequired,
};
