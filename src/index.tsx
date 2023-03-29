import * as React from 'react'
import Helmet from 'react-helmet'

interface WorkspacePortalProps {
  companyId: string
}

export const WorkspacePortal = ({ companyId }: WorkspacePortalProps) => 
  <div>
    <Helmet>
      <script src={`https://app.workspacerecruit.com/api/publish/portal/js/${companyId}`}></script>
    </Helmet>
    <div id="careerportal"></div>
  </div>