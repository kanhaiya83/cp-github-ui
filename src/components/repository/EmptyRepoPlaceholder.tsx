import React from 'react';

interface GitRepoGuideProps {
  repoUrl: string;
}

const GitRepoGuide: React.FC<GitRepoGuideProps> = ({ repoUrl }) => {
  return (
    <div style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '20px', borderRadius: '5px' }}>
      <h2>Git Repository Guide</h2>
      <p>Follow these steps to push code to the repository:</p>
      <pre>
        <code>
          {`# Clone the repository
git clone ${repoUrl}

# Make changes to the code
# Add files to staging area
git add .

# Commit changes
git commit -m "Your commit message"

# Push changes to the repository
git push origin master`}
        </code>
      </pre>
    </div>
  );
};

export default GitRepoGuide;