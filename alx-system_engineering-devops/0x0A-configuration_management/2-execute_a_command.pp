# Kill process
exec { 'killmenow':
  command => 'pkill killmenow',
  onlyif  => 'pgrep killmenow',
  path    => '/usr/bin:/bin',
}
